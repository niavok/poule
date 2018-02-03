package com.niavok.poule;

import java.io.BufferedInputStream;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.StringWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.AbstractMap;
import java.util.ArrayList;

import javax.net.ssl.HttpsURLConnection;

/**
 * Created by fredb on 03/02/2018.
 */

class GSLogin {
    private final String mEmail;
    private final String mPassword;
    private boolean m_result;

    public GSLogin(String email, String password) {


        this.mEmail = email;
        this.mPassword = password;
        m_result = false;
    }

    static String convertStreamToString(java.io.InputStream is) {
        java.util.Scanner s = new java.util.Scanner(is).useDelimiter("\\A");
        return s.hasNext() ? s.next() : "";
    }

    public void Query() {
        URL url = null;
        m_result = false;
        try {
            url = new URL("https://www.gymsuedoise.com/lo/");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return;
        }
        try {
            HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
            urlConnection.setRequestMethod("POST");
            urlConnection.setDoInput(true);
            urlConnection.setDoOutput(true);

            StringBuilder params = new StringBuilder();
            params.append("em=");
            params.append(URLEncoder.encode(mEmail, "UTF-8"));
            params.append("&pw=");
            params.append(URLEncoder.encode(mPassword, "UTF-8"));

            OutputStream os = urlConnection.getOutputStream();
            BufferedWriter writer = new BufferedWriter(
                    new OutputStreamWriter(os, "UTF-8"));
            writer.write(params.toString());
            writer.flush();
            writer.close();
            os.close();

            urlConnection.connect();

            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());

                String responseString = convertStreamToString(in);

                if(responseString.contains("/account/bv_h/"))
                {
                    m_result = true;
                }
            } finally {
                urlConnection.disconnect();
            }
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }
    }

    public boolean IsLogged() {
        return m_result;
    }
}
