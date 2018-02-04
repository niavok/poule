package com.niavok.poule;

import android.content.Context;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.List;

public class AddActivity extends AppCompatActivity {

    private ListLocationsTask mListLocationsTask;
    private ListActivityTask mListActivityTask;

    private PouleConfig mConfig;
    private Spinner mDaysSpinner;
    private Spinner mLocationsSpinner;
    private LinearLayout mLocationActiviyyList;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add);

        mConfig = new PouleConfig(getApplicationContext());

        mLocationActiviyyList = (LinearLayout) findViewById(R.id.location_activity_list);
        mDaysSpinner = (Spinner) findViewById(R.id.spinnerDays);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
                R.array.days_array, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        mDaysSpinner.setAdapter(adapter);
        mDaysSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                generateActivityList();
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });

        mLocationsSpinner = (Spinner) findViewById(R.id.spinnerLocations);
        mLocationsSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                generateActivityList();
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });

        mListLocationsTask = new AddActivity.ListLocationsTask();
        mListLocationsTask.execute((Void) null);
    }

    public class ListLocationsTask extends AsyncTask<Void, Void, Boolean> {

        List<GsLocation> mLocations;

        ListLocationsTask() {

        }

        @Override
        protected Boolean doInBackground(Void... params) {
            GsSession session = new GsSession(mConfig.getEmail(), mConfig.getPassword());
            session.login();
            if(!session.isLogged())
            {
                return false;
            }

            mLocations = session.getLocations();

            if(mLocations == null)
            {
                return null;
            }

            return true;
        }

        @Override
        protected void onPostExecute(final Boolean success) {
            mListLocationsTask = null;

            if (success) {

                GsLocation[] locationArray = mLocations.toArray(new GsLocation[mLocations.size()]);

                ArrayAdapter spinnerArrayAdapter = new ArrayAdapter(AddActivity.this,
                        android.R.layout.simple_spinner_dropdown_item, locationArray);

                mLocationsSpinner.setAdapter(spinnerArrayAdapter);
            } else {
                mLocationsSpinner.setAdapter(null);
            }
        }

        @Override
        protected void onCancelled() {
            mListLocationsTask = null;
        }
    }

    void generateActivityList()
    {
        String day = (String) mDaysSpinner.getSelectedItem();
        GsLocation location = (GsLocation) mLocationsSpinner.getSelectedItem();

        clearActivityList();

        if(location == null || day == null)
        {
            return;
        }

        mListActivityTask = new AddActivity.ListActivityTask(location, day);
        mListActivityTask.execute((Void) null);
    }

    private void clearActivityList() {
        mLocationActiviyyList.removeAllViews();
    }


    public class ListActivityTask extends AsyncTask<Void, Void, Boolean> {

        private final GsLocation mLocation;
        private final String mDay;
        List<GsActivity> mActivities;

        public ListActivityTask(GsLocation location, String day) {

            this.mLocation = location;
            this.mDay = day;
        }

        @Override
        protected Boolean doInBackground(Void... params) {
            GsSession session = new GsSession(mConfig.getEmail(), mConfig.getPassword());
            session.login();
            if(!session.isLogged())
            {
                return false;
            }

            session.getLocations();
            mActivities = session.getActivities(mLocation, new GsDay(mDay));

            if(mActivities == null)
            {
                return false;
            }

            return true;
        }

        @Override
        protected void onPostExecute(final Boolean success) {
            mListActivityTask = null;

            if (success) {

                for(GsActivity activity : mActivities)
                {
                    LayoutInflater vi = (LayoutInflater) getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
                    View v = vi.inflate(R.layout.add_activity_view, null);

                    TextView time = (TextView) v.findViewById(R.id.textViewTime);
                    time.setText(activity.getTimeString());

                    TextView level = (TextView) v.findViewById(R.id.textViewLevel);
                    level.setText(activity.getLevelString());

                    TextView location = (TextView) v.findViewById(R.id.textViewLocation);
                    location.setText(activity.getLocationString());

                    mLocationActiviyyList.addView(v);
                }


            }
        }

        @Override
        protected void onCancelled() {
            mListActivityTask = null;
        }
    }
}
