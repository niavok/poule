package com.niavok.poule;

/**
 * Created by fredb on 04/02/2018.
 */

class GsDay {

    private static final String[] DAYS_NAME = {"Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"};

    int mId;

    static int toId(String  string)
    {
        for(int i =0; i< DAYS_NAME.length; i++)
        {
            if(DAYS_NAME[i].equals(string))
            {
                return i;
            }
        }
        return -1;
    }

    public GsDay(String string) {
        mId = toId(string);
    }

    public String getId() {
        return Integer.toString(mId);
    }
}
