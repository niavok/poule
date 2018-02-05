package com.niavok.poule;

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



        for(final GsActivity activity : mConfig.getActivities())
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

            String status;
            if(remainingDays > 0) {
                status = "in " + Integer.toString(remainingDays) + " day" + (remainingDays > 1 ? "s" : "");
            }
            else
            {
                status = "today";
            }

            TextView statusTextView = (TextView) v.findViewById(R.id.textViewStatus);
            statusTextView.setText(status);

            final Button resaButton = (Button) v.findViewById(R.id.buttonResa);
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
