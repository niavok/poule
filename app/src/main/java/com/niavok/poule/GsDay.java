package com.niavok.poule;

/**
 * Created by fredb on 04/02/2018.
 */

class GsDay {

    private static final String[] DAYS_NAME = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};

    int mId;

    public GsDay(int dayId) {
        mId = dayId;
    }

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

    public int getIntId() {
        return mId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GsDay gsDay = (GsDay) o;

        return mId == gsDay.mId;
    }

    @Override
    public int hashCode() {
        return mId;
    }
}
