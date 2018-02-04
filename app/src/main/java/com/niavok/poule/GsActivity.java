package com.niavok.poule;

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
}
