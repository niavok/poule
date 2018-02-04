package com.niavok.poule;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by fredb on 03/02/2018.
 */

class PouleConfig {

    private final SharedPreferences mSharedPreferences;

    PouleConfig(Context context)
    {
        mSharedPreferences = context.getSharedPreferences("poule_config",Context.MODE_PRIVATE);
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

    public void save(String email, String password, String security)
    {
        mSharedPreferences
                .edit()
                .putString("email", email)
                .putString("password", password)
                .putString("security", security)
                .apply();
    }
}
