package com.niavok.poule;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    private PouleConfig mConfig;
    private LinearLayout mResaActivityList;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        mResaActivityList = (LinearLayout) findViewById(R.id.resa_activity_list);

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        mConfig = new PouleConfig(getApplicationContext());

        mResaActivityList.removeAllViews();

        final ArrayList<GsActivity> activities = mConfig.getActivities();
        Collections.sort(activities, new Comparator<GsActivity>() {
            @Override
            public int compare(GsActivity g1, GsActivity g2) {
                int d1 = g1.getRemainingDays();
                int d2 = g2.getRemainingDays();

                if(d1 == d2)
                {
                    return g1.getTimeString().compareTo(g1.getTimeString());
                }
                else {
                    return d1 - d2;
                }
            }
        });

        for(final GsActivity activity : activities)
        {
            //Sort by date /status

            LayoutInflater vi = (LayoutInflater) getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            View v = vi.inflate(R.layout.resa_activity_view, null);

            TextView time = (TextView) v.findViewById(R.id.textViewTime);
            time.setText(activity.getTimeString());

            TextView level = (TextView) v.findViewById(R.id.textViewLevel);
            level.setText(activity.getLevelString());

            TextView location = (TextView) v.findViewById(R.id.textViewLocation);
            location.setText(activity.getLocationString());

            int remainingDays = activity.getRemainingDays();

            final Button resaButton = (Button) v.findViewById(R.id.buttonResa);


            String status;
            if(remainingDays > 0) {
                status = "In " + Integer.toString(remainingDays) + " day" + (remainingDays > 1 ? "s" : "");
            }
            else
            {
                status = "Today";
                resaButton.setEnabled(false);
            }

            TextView statusTextView = (TextView) v.findViewById(R.id.textViewStatus);
            statusTextView.setText(status);


            resaButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    AlarmManager alarmMgr = (AlarmManager) getApplicationContext().getSystemService(Context.ALARM_SERVICE);
                    Intent intent = new Intent(getApplicationContext(), BookingJobReceiver.class);
                    intent.setAction(activity.getLevelString()+" - "+activity.getTimeString()+" - "+activity.getLocationString());

                    intent.putExtra("day", activity.getDay().getIntId());
                    intent.putExtra("locationId", activity.getLocation().getId());
                    intent.putExtra("locationName", activity.getLocation().getName());
                    intent.putExtra("activityLocation", activity.getLocationString());
                    intent.putExtra("activityTime", activity.getTimeString());
                    intent.putExtra("activityLevel", activity.getLevelString());

                    PendingIntent alarmIntent = PendingIntent.getBroadcast(getApplicationContext(), 0, intent, 0);

                    alarmMgr.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, activity.getResaDate(), alarmIntent);
                }
            });

            final Button cancelButton = (Button) v.findViewById(R.id.buttonCancel);

            mResaActivityList.addView(v);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        //getMenuInflater().inflate(R.menu.main, menu);
        return false;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_add_activity) {
            Intent intent = new Intent(this, AddActivity.class);
            startActivity(intent);
        } else if (id == R.id.nav_delete_activity) {

        } else if (id == R.id.nav_settings) {
            Intent intent = new Intent(this, SettingsActivity.class);
            startActivity(intent);
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }
}
