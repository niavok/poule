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

class GsSession {
    private final String mEmail;
    private final String mPassword;
    private boolean mIsLogged;
    private CookieManager mCookieManager;
    private String mSearchRecover;

    public GsSession(String email, String password) {
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

    public List<GsLocation> getLocations() {
        if(!isLogged())
        {
            return null;
        }

        ArrayList<GsLocation> locations = new ArrayList<>();


        String locationPage = get("/cours/list/");

        saveClassUserSearchRecover(locationPage);

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
                locations.add(new GsLocation(id, name));
            }
        }

        return locations;
    }

    private void saveClassUserSearchRecover(String locationPage) {
        //<input type="hidden" name="class_user_search_recover" value="165233376">

        MatchToken token = getToken(locationPage, "<input type=\"hidden\" name=\"class_user_search_recover\" value=\"", "\"", 0);

        if(token != null) {
            mSearchRecover = token.token;
        }
    }

    private MatchToken getToken(String string, String start, String end, int index) {

        int startIndex = string.indexOf(start, index);
        if(startIndex == -1)
        {
            return null;
        }
        startIndex += start.length();
        int endIndex = string.indexOf(end, startIndex);

        if(endIndex == -1)
        {
            return null;
        }

        return new MatchToken(string.substring(startIndex, endIndex), endIndex);
    }

    private MatchToken getTokenReverse(String string, String start, String end, int index) {

        int startIndex = string.indexOf(start, index);
        if(startIndex == -1)
        {
            return null;
        }

        int endIndex = string.lastIndexOf(end, startIndex);

        if(endIndex == -1)
        {
            return null;
        }
        endIndex += end.length();

        return new MatchToken(string.substring(endIndex, startIndex), startIndex);
    }

    public List<GsActivity> getActivities(GsLocation location, GsDay day) {
        if(!isLogged() || mSearchRecover==null)
        {
            return null;
        }

        ArrayList<GsLocation> locations = new ArrayList<>();

       /* class_search_regionid=-1&class_search_level=-2
        class_search_day:2

        class_search_passcolor:-1
        class_search_locationid:1
*/
        StringBuilder params = new StringBuilder();
        params.append("class_search_regionid=-1&class_search_level=-2&class_search_passcolor:-1&class_search_day=");
        try {
            params.append(URLEncoder.encode(day.getId(), "UTF-8"));
            params.append("&class_search_locationid=");
            params.append(URLEncoder.encode(location.getId(), "UTF-8"));
            params.append("&class_user_search_recover=");
            params.append(URLEncoder.encode(mSearchRecover, "UTF-8"));



        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return null;
        }

        String page = post("/cours/list/", params.toString());

        ArrayList<GsActivity> list = new ArrayList<GsActivity>();


        int index = 0;
        while(true)
        {

            MatchToken activityTime = getToken(page, "<td class=\"time \">", "</td>", index);
            if(activityTime == null)
            {
                break;
            }
            index = activityTime.endIndex + 1;


            MatchToken activityLocation = getTokenReverse(page, "</a>", "\">", index);
            if(activityLocation == null)
            {
                break;
            }
            index = activityLocation.endIndex +1;


            MatchToken activityLevel = getTokenReverse(page, "</a>", "\"/>", index);
            if(activityLevel == null)
            {
                break;
            }
            index = activityLevel.endIndex +1;

            //href="https://www.gymsuedoise.com/resa/bk/?id=438424&amp;u=a2e9">RÉSERVER</a>
            MatchToken resaLink = getTokenReverse(page, "\">RÉSERVER</a>", "href=\"https://www.gymsuedoise.com", index);
            String resaLinkStr = null;
            if(resaLink != null)
            {
                resaLinkStr = resaLink.token;
            }
            index = activityLevel.endIndex +1;

            list.add(new GsActivity(location, day, activityTime.token, activityLocation.token, activityLevel.token, resaLinkStr));
        }


        return list;
    }
}
