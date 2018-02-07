package com.niavok.poule;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.support.v4.content.WakefulBroadcastReceiver;
import android.widget.Toast;

import java.util.List;

/**
 * Created by fredb on 06/02/2018.
 */

public class BookingJobReceiver extends WakefulBroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        Intent intentForService = new Intent(context, BookingJobService.class);
        intentForService.setAction(intent.getAction());
        intentForService.setData(intent.getData());
        intentForService.replaceExtras(intent.getExtras());

        startWakefulService(context, intentForService);
    }
}
