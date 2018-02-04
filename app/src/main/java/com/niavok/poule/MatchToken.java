package com.niavok.poule;

/**
 * Created by fredb on 04/02/2018.
 */

class MatchToken {
    public final String token;
    public final int endIndex;

    public MatchToken(String token, int endIndex) {

        this.token = token;
        this.endIndex = endIndex;
    }
}
