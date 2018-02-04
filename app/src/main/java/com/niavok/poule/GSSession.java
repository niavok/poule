package com.niavok.poule;

import android.webkit.CookieManager;

import java.io.BufferedInputStream;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

/**
 * Created by fredb on 03/02/2018.
 */

class GSSession {
    private final String mEmail;
    private final String mPassword;
    private boolean mIsLogged;
    private CookieManager mCookieManager;

    public GSSession(String email, String password) {
        this.mEmail = email;
        this.mPassword = password;
        mIsLogged = false;
        mCookieManager = CookieManager.getInstance();
    }

    static String convertStreamToString(java.io.InputStream is) {
        java.util.Scanner s = new java.util.Scanner(is).useDelimiter("\\A");
        return s.hasNext() ? s.next() : "";
    }

    public String post(String path, String postData)
    {
        URL url = null;
        try {
            url = new URL("https://www.gymsuedoise.com"+ path);
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return null;
        }
        try {

            HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
            urlConnection.setRequestMethod("POST");
            urlConnection.setDoInput(true);
            urlConnection.setDoOutput(true);

            String cookie = mCookieManager.getCookie(urlConnection.getURL().toString());
            if (cookie != null) {
                urlConnection.setRequestProperty("Cookie", cookie);
            }

            OutputStream os = urlConnection.getOutputStream();
            BufferedWriter writer = new BufferedWriter(
                    new OutputStreamWriter(os, "UTF-8"));
            writer.write(postData);
            writer.flush();
            writer.close();
            os.close();

            urlConnection.connect();

            // Get cookies from responses and save into the cookie manager
            List<String> cookieList = urlConnection.getHeaderFields().get("Set-Cookie");
            if (cookieList != null) {
                for (String cookieTemp : cookieList) {
                    mCookieManager.setCookie(urlConnection.getURL().toString(), cookieTemp);
                }
            }

            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());

                String responseString = convertStreamToString(in);
                return responseString;
            } finally {
                urlConnection.disconnect();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String get(String path)
    {
        URL url = null;
        try {
            url = new URL("https://www.gymsuedoise.com"+ path);
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return null;
        }
        try {

            HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
            urlConnection.setRequestMethod("GET");
           // urlConnection.setDoInput(true);
           // urlConnection.setDoOutput(true);

            String cookie = mCookieManager.getCookie(urlConnection.getURL().toString());
            if (cookie != null) {
                urlConnection.setRequestProperty("Cookie", cookie);
            }

            urlConnection.connect();

            // Get cookies from responses and save into the cookie manager
            List<String> cookieList = urlConnection.getHeaderFields().get("Set-Cookie");
            if (cookieList != null) {
                for (String cookieTemp : cookieList) {
                    mCookieManager.setCookie(urlConnection.getURL().toString(), cookieTemp);
                }
            }

            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());

                String responseString = convertStreamToString(in);
                return responseString;
            } finally {
                urlConnection.disconnect();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void login() {
        mIsLogged = false;

        StringBuilder params = new StringBuilder();
        params.append("em=");
        try {
            params.append(URLEncoder.encode(mEmail, "UTF-8"));
            params.append("&pw=");
            params.append(URLEncoder.encode(mPassword, "UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return;
        }

        String responseString = post("/lo/", params.toString());

        if(responseString != null && responseString.contains("/account/bv_h/"))
        {
            mIsLogged = true;
        }
    }

    public boolean isLogged() {
        return mIsLogged;
    }

    public List<GSLocation> getLocations() {
        if(!isLogged())
        {
            return null;
        }

        ArrayList<GSLocation> locations = new ArrayList<>();


        String locationPage = get("/cours/list/");

        int selectStartIndex =  locationPage.indexOf("<select name=\"class_search_locationid\" title=\"Filtrer sur la salle\"");
        if(selectStartIndex == -1)
        {
            return null;
        }

        int selectEndIndex =  locationPage.indexOf("</select>", selectStartIndex);
        if(selectEndIndex == -1)
        {
            return null;
        }

        int index = selectStartIndex;
        while(true)
        {

            //"<option value="626">Paris 5 Jussieu Jean Talbot</option>"
            index = locationPage.indexOf("<option value=", index);
            if(index == -1 || index > selectEndIndex)
            {
                break;
            }

            int startIdIndex = index + 15;
            int endIdIndex = locationPage.indexOf("\"", startIdIndex);
            String id = locationPage.substring(startIdIndex, endIdIndex);



            int startNameIndex = locationPage.indexOf(">", endIdIndex);
            int endNameIndex = locationPage.indexOf("<", startNameIndex);

            String name = locationPage.substring(startNameIndex+1, endNameIndex);

            index = endNameIndex;
            if(!id.equals("-1")) {
                locations.add(new GSLocation(id, name));
            }
        }

        return locations;
    }
}
