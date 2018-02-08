package com.niavok.poule;

import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 * Created by fredb on 04/02/2018.
 */

class GsActivity {

    private final GsLocation mLocation;
    private final GsDay mDay;
    private final String mTimeString;
    private final String mLocationString;
    private final String mLevelString;
    private final String mResaLink;
    private boolean mIsBooking;

    public GsActivity(GsLocation location, GsDay day, String timeString, String locationString, String levelString, String resaLink) {
        this.mLocation = location;
        this.mDay = day;
        this.mTimeString = timeString;
        this.mLocationString = locationString;
        this.mLevelString = levelString;
        this.mIsBooking=false;

        if(resaLink != null)
        {
            mResaLink = resaLink.replace("&amp;", "&");
        }
        else
        {
            mResaLink = null;
        }
    }

    public GsLocation getLocation() {
        return mLocation;
    }

    public GsDay getDay() {
        return mDay;
    }

    public String getTimeString() {
        return mTimeString;
    }

    public String getLocationString() {
        return mLocationString;
    }

    public String getLevelString() {
        return mLevelString;
    }

    public String getResaLink() {
        return mResaLink;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GsActivity that = (GsActivity) o;

        if (mLocation != null ? !mLocation.equals(that.mLocation) : that.mLocation != null)
            return false;
        if (mDay != null ? !mDay.equals(that.mDay) : that.mDay != null) return false;
        if (mTimeString != null ? !mTimeString.equals(that.mTimeString) : that.mTimeString != null)
            return false;
        if (mLocationString != null ? !mLocationString.equals(that.mLocationString) : that.mLocationString != null)
            return false;
        return mLevelString != null ? mLevelString.equals(that.mLevelString) : that.mLevelString == null;
    }

    @Override
    public int hashCode() {
        int result = mLocation != null ? mLocation.hashCode() : 0;
        result = 31 * result + (mDay != null ? mDay.hashCode() : 0);
        result = 31 * result + (mTimeString != null ? mTimeString.hashCode() : 0);
        result = 31 * result + (mLocationString != null ? mLocationString.hashCode() : 0);
        result = 31 * result + (mLevelString != null ? mLevelString.hashCode() : 0);
        return result;
    }

    public int getRemainingDays() {
        Calendar calendar = Calendar.getInstance();
        int currentDay = (calendar.get(Calendar.DAY_OF_WEEK) - 2) % 7;


        int diff = (mDay.getIntId() - currentDay +7) % 7;
        return diff;
    }

    public long getResaDate() {

        Calendar calendar = Calendar.getInstance();

        // TODO remove fake
        boolean fakeDate = true;

        if(fakeDate)
        {
            calendar.add(Calendar.SECOND, 10);
        }
        else {
            calendar.add(Calendar.DATE, getRemainingDays());
            calendar.set(Calendar.HOUR_OF_DAY, 0);
            calendar.set(Calendar.MINUTE, 0);
            calendar.set(Calendar.SECOND, 1);
        }
        //SimpleDateFormat formatter=new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
        //String currentDate = formatter.format(calendar.getTime());

        return calendar.getTimeInMillis();

    }

    public boolean isBooking() {
        return mIsBooking;
    }

    public void setBooking(boolean booking) {
        mIsBooking = booking;
    }
}
