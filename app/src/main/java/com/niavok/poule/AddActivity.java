package com.niavok.poule;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

import java.util.List;

public class AddActivity extends AppCompatActivity {

    private ListLocationsTask mListLocationsTask;
    private PouleConfig mConfig;
    private Spinner mDaysSpinner;
    private Spinner mLocationsSpinner;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add);

        mConfig = new PouleConfig(getApplicationContext());

        mDaysSpinner = (Spinner) findViewById(R.id.spinnerDays);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
                R.array.days_array, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        mDaysSpinner.setAdapter(adapter);

        mLocationsSpinner = (Spinner) findViewById(R.id.spinnerLocations);

        mListLocationsTask = new AddActivity.ListLocationsTask();
        mListLocationsTask.execute((Void) null);
    }

    public class ListLocationsTask extends AsyncTask<Void, Void, Boolean> {

        List<GSLocation> mLocations;

        ListLocationsTask() {

        }

        @Override
        protected Boolean doInBackground(Void... params) {
            GSSession session = new GSSession(mConfig.getEmail(), mConfig.getPassword());
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

                GSLocation[] locationArray = mLocations.toArray(new GSLocation[mLocations.size()]);

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
}
