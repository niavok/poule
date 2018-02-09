package com.niavok.poule;

import android.app.IntentService;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.support.annotation.Nullable;
import android.support.v4.app.NotificationCompat;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by fredb on 07/02/2018.
 */

public class BookingJobService extends IntentService {

    public BookingJobService() {
        super("PouleBookingService");
    }

    class BookingContext
    {
        public String failCause;
        public PouleConfig config;
        public String activity;
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {
        onHandleIntentSafe(intent);
        BookingJobReceiver.completeWakefulIntent(intent);
    }

    private void onHandleIntentSafe(Intent intent) {
        BookingContext bookingContext = new BookingContext();
        bookingContext.config = new PouleConfig(getApplicationContext());
        bookingContext.activity = "Unknown";
        bookingContext.failCause = "Unknown cause";

        int day  = intent.getIntExtra("day", -1);
        String locationId = intent.getStringExtra("locationId");
        String locationName = intent.getStringExtra("locationName");
        String activityLocation = intent.getStringExtra("activityLocation");
        String activityTime = intent.getStringExtra("activityTime");
        String activityLevel = intent.getStringExtra("activityLevel");


        if(day == -1)
        {
            bookingContext.failCause = "Invalid booking day";
            notifyResaFailed(bookingContext);
            return;
        }

        if(locationId == null || locationName == null)
        {
            bookingContext.failCause = "Invalid booking location";
            notifyResaFailed(bookingContext);
            return;
        }

        if(activityLevel == null || activityLocation == null || activityTime == null)
        {
            bookingContext.failCause = "Invalid booking activity";
            notifyResaFailed(bookingContext);
            return;
        }

        bookingContext.activity = activityTime;

        GsLocation resaLocation = new GsLocation(locationId, locationName);
        GsDay resaDay = new GsDay(day);
        GsActivity resaActivity = new GsActivity(resaLocation,resaDay, activityTime, activityLocation,activityLevel, null);


        ArrayList<GsActivity> configActivities = bookingContext.config.getActivities();
        int activityIndex = configActivities.indexOf(resaActivity);
        if(activityIndex != -1)
        {
            configActivities.get(activityIndex).setBooking(false);
            bookingContext.config.saveActivities();
        }

        int tryCount = 5;
        for(int i = 0 ; i < tryCount; i++)
        {

            if(makeReservation(bookingContext, resaLocation, resaDay, resaActivity))
            {
                notifyResaSuccess(bookingContext);
                return;
            }

            if(i==tryCount-1)
            {
                break;
            }
            try {
                Thread.sleep(1000 + 2000 * i);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        notifyResaFailed(bookingContext);
    }

    private void notifyResaFailed(BookingContext bookingContext) {
        NotificationManager mNotificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        NotificationCompat.Builder noti = new NotificationCompat.Builder(getApplicationContext());

                noti.setContentTitle("Booking failed: "+ bookingContext.activity)
                .setContentText(bookingContext.failCause)
                .setSmallIcon(R.mipmap.ic_launcher_round)
                .setPriority(Notification.PRIORITY_MAX)
                .setLights(0x4e0099, 100, 100)
                .setVibrate(new long[]{100, 200, 100, 200, 100, 400, 300, 400, 300, 400, 300, 100, 200, 100, 200, 100, 400, 300, 400, 300, 400, 300})
                ;

        mNotificationManager.notify(bookingContext.activity.hashCode(), noti.build());
    }

    private void notifyResaSuccess(BookingContext bookingContext) {
        NotificationManager mNotificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        NotificationCompat.Builder noti = new NotificationCompat.Builder(getApplicationContext());

        noti.setContentTitle("Booking success: "+ bookingContext.activity)
                .setSmallIcon(R.mipmap.ic_launcher_round)
                .setPriority(Notification.PRIORITY_LOW)
                .setLights(0x4e0099, 100, 5000)
        ;

        mNotificationManager.notify(bookingContext.activity.hashCode(), noti.build());
    }

    private boolean makeReservation(BookingContext bookingContext, GsLocation resaLocation, GsDay resaDay, GsActivity resaActivity) {
        GsSession session = new GsSession(bookingContext.config.getEmail(), bookingContext.config.getPassword());
        session.login();
        if(!session.isLogged()) {
            bookingContext.failCause = "Failed to login";
            return false;
        }

        session.getLocations();
        List<GsActivity> activities = session.getActivities(resaLocation, resaDay);

        int activityIndex = activities.indexOf(resaActivity);

        if(activityIndex == -1)
        {
            bookingContext.failCause = "Failed to find activity";
            return false;
        }

        GsActivity activity = activities.get(activityIndex);

        if(activity.getResaLink() == null)
        {
            bookingContext.failCause = "Failed to find the booking link";
            return false;
        }

        if(!session.book(activity))
        {
            bookingContext.failCause = "Booking action failed";
            return false;
        }

        return true;
    }
}
