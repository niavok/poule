package com.niavok.poule;

/**
 * Created by fredb on 04/02/2018.
 */

class GsLocation {
    public String id;
    public String name;

    public GsLocation(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String toString()
    {
        return name;
    }

    public String getId() {
        return id;
    }
}
