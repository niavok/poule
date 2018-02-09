package com.niavok.poule;

import android.content.Context;
import android.content.SharedPreferences;

import java.util.ArrayList;

/**
 * Created by fredb on 03/02/2018.
 */

class PouleConfig {

    private final SharedPreferences mSharedPreferences;
    private ArrayList<GsActivity> mActivities;
    private ConfigChangedListener mChangeListener;

    public interface ConfigChangedListener
    {
        void onChanged();
    }
    
    PouleConfig(Context context)
    {
        mSharedPreferences = context.getSharedPreferences("poule_config",Context.MODE_PRIVATE);

        mSharedPreferences.registerOnSharedPreferenceChangeListener(new SharedPreferences.OnSharedPreferenceChangeListener() {
            @Override
            public void onSharedPreferenceChanged(SharedPreferences sharedPreferences, String s) {
                loadActivities();
                if(mChangeListener != null)
                {
                    mChangeListener.onChanged();
                }
            }
        });
        loadActivities();
    }

    public void setChangeListener(ConfigChangedListener changeListener) {
        mChangeListener = changeListener;
    }

    private void loadActivities() {
        mActivities = new ArrayList<GsActivity>();
        int count = mSharedPreferences.getInt("activityCount", 0);
        for (int i = 0; i < count; i++) {
            String locationId = getStringParam("locationId-", i);
            String locationName = getStringParam("locationName-", i);
            int dayId = getIntParam("dayId-", i);
            String locationName2 = getStringParam("locationName2-", i);
            String time = getStringParam("time-", i);
            String level = getStringParam("level-", i);
            int booking = getIntParam("booking-", i);

            GsActivity activity = new GsActivity(new GsLocation(locationId, locationName), new GsDay(dayId), time, locationName2, level, null);
            activity.setBooking(booking == 1);
            mActivities.add(activity);
        }
    }

    private int getIntParam(String s, int i) {
        return mSharedPreferences.getInt(s + Integer.toString(i), -1);
    }

    private String getStringParam(String s, int i) {
        return mSharedPreferences.getString(s + Integer.toString(i), "");
    }

    public String getEmail() {
        String email = mSharedPreferences.getString("email", "");
        return email;
    }

    public String getPassword() {
        String password = mSharedPreferences.getString("password", "");
        return password;
    }

    public String getSecurity() {
        String security = mSharedPreferences.getString("security", "");
        return security;
    }

    public void saveLogin(String email, String password, String security)
    {
        mSharedPreferences
                .edit()
                .putString("email", email)
                .putString("password", password)
                .putString("security", security)
                .apply();
    }

    public void addActivity(GsActivity activity) {
        mActivities.add(activity);
        saveActivities();
    }

    public void saveActivities() {
        SharedPreferences.Editor editor = mSharedPreferences.edit();

        editor.putInt("activityCount", mActivities.size());

        int count = mSharedPreferences.getInt("activityCount", 0);
        for (int i = 0; i < mActivities.size(); i++) {
            GsActivity activity = mActivities.get(i);
            setStringParam(editor, "locationId-", i, activity.getLocation().getId());
            setStringParam(editor, "locationName-", i, activity.getLocation().getName());
            setIntParam(editor, "dayId-", i, activity.getDay().getIntId());
            setStringParam(editor, "locationName2-", i, activity.getLocationString());
            setStringParam(editor, "time-", i, activity.getTimeString());
            setStringParam(editor, "level-", i, activity.getLevelString());
            setIntParam(editor, "booking-", i, activity.isBooking() ? 1 : 0);
        }

        editor.apply();
    }

    private void setStringParam(SharedPreferences.Editor editor, String s, int i, String v) {
        editor.putString(s + Integer.toString(i), v);
    }

    private void setIntParam(SharedPreferences.Editor editor, String s, int i, int v) {
        editor.putInt(s + Integer.toString(i), v);
    }

    public boolean HasActivity(GsActivity activity) {
        for(GsActivity other : mActivities)
        {
            if(other.equals(activity))
            {
                return true;
            }
        }
        return false;
    }

    public ArrayList<GsActivity> getActivities() {
        return mActivities;
    }
}
