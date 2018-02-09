package com.niavok.poule;

import android.app.AlarmManager;
import android.content.Context;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class RemoveActivity extends AppCompatActivity {

    private PouleConfig mConfig;
    private LinearLayout mResaActivityList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_remove);

        mResaActivityList = (LinearLayout) findViewById(R.id.resa_activity_list);
    }

    @Override
    protected void onResume() {
        super.onResume();

        mConfig = new PouleConfig(getApplicationContext());
        refresh();
    }


    private void refresh() {
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
            View v = vi.inflate(R.layout.remove_activity_view, null);

            TextView time = (TextView) v.findViewById(R.id.textViewTime);
            time.setText(activity.getTimeString());

            TextView level = (TextView) v.findViewById(R.id.textViewLevel);
            level.setText(activity.getLevelString());

            TextView location = (TextView) v.findViewById(R.id.textViewLocation);
            location.setText(activity.getLocationString());


            final Button removeButton = (Button) v.findViewById(R.id.buttonRemove);


            removeButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    AlarmManager alarmMgr = (AlarmManager) getApplicationContext().getSystemService(Context.ALARM_SERVICE);
                    alarmMgr.cancel(activity.createActivityIntent(getApplicationContext()));

                    mConfig.removeActivity(activity);
                    removeButton.setEnabled(false);
                    refresh();
                }
            });


            mResaActivityList.addView(v);
        }
    }
}
