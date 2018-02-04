package com.niavok.poule;

/**
 * Created by fredb on 04/02/2018.
 */

class GSLocation {
    public String id;
    public String name;

    public GSLocation(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String toString()
    {
        return name;
    }
}
