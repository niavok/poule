package com.niavok.poule;

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

    public GsActivity(GsLocation location, GsDay day, String timeString, String locationString, String levelString, String resaLink) {
        this.mLocation = location;
        this.mDay = day;
        this.mTimeString = timeString;
        this.mLocationString = locationString;
        this.mLevelString = levelString;
        this.mResaLink = resaLink;
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


        return (mDay.getIntId() - currentDay) % 7;
    }
}
