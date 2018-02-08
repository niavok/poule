package com.niavok.poule;

import android.app.IntentService;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.support.annotation.Nullable;
import android.support.v4.app.NotificationCompat;

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
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {
        onHandleIntentSafe(intent);
        BookingJobReceiver.completeWakefulIntent(intent);
    }

    private void onHandleIntentSafe(Intent intent) {
        BookingContext bookingContext = new BookingContext();
        bookingContext.config = new PouleConfig(getApplicationContext());
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
            notifyResaFailed();
            return;
        }

        if(locationId == null || locationName == null)
        {
            bookingContext.failCause = "Invalid booking location";
            notifyResaFailed();
            return;
        }

        if(activityLevel == null || activityLocation == null || activityTime == null)
        {
            bookingContext.failCause = "Invalid booking activity";
            notifyResaFailed();
            return;
        }

        GsLocation resaLocation = new GsLocation(locationId, locationName);
        GsDay resaDay = new GsDay(day);
        GsActivity resaActivity = new GsActivity(resaLocation,resaDay, activityTime, activityLocation,activityLevel, null);

        int tryCount = 1;
        for(int i = 0 ; i < tryCount; i++)
        {

            if(makeReservation(bookingContext, resaLocation, resaDay, resaActivity))
            {
                notifyResaSuccess();
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

        notifyResaFailed();
    }

    private void notifyResaFailed() {
        NotificationManager mNotificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        NotificationCompat.Builder noti = new NotificationCompat.Builder(getApplicationContext());

                noti.setContentTitle("Booking failed")
                .setContentText("plop")
                .setSmallIcon(R.mipmap.ic_launcher_round)
                .setPriority(Notification.PRIORITY_MAX)
        ///mBuilder.setStyle(bigText);
                //.setLargeIcon(R.drawable.ic_menu_gallery)
           //     .setVibrate(new long[]{100, 200, 300, 400, 500, 400, 300, 200, 400})
                ;

        mNotificationManager.notify(1, noti.build());
    }

    private void notifyResaSuccess() {
        NotificationManager mNotificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        Notification noti = new Notification.Builder(getApplicationContext())
                .setContentTitle("New mail from ")
                .setContentText("plop")
                .setSmallIcon(R.drawable.ic_menu_manage)
                .setVibrate(new long[]{100, 200, 300, 400, 500, 400, 300, 200, 400})
                //.setLargeIcon(aBitmap)
                .build();

        mNotificationManager.notify(0, noti);
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
