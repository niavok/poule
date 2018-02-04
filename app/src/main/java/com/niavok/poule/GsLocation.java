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

    public String getName() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GsLocation that = (GsLocation) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        return name != null ? name.equals(that.name) : that.name == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
