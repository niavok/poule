package com.niavok.poule;

import android.app.IntentService;
import android.content.Intent;
import android.support.annotation.Nullable;

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

        for(int i = 0 ; i < 5; i++)
        {

            if(makeReservation(bookingContext, resaLocation, resaDay, resaActivity))
            {
                notifyResaSuccess();
            }

            try {
                Thread.sleep(1000 + 1000 * i);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        notifyResaFailed();
    }

    private void notifyResaFailed() {
    }

    private void notifyResaSuccess() {
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
