package com.yashwanth.guesswhat.utils;

import org.json.JSONObject;

import com.yashwanth.guesswhat.utils.models.Movie;

public class MovieBuilder {
	
	private MovieBuilder() {}
	
	public static Movie createMovie(JSONObject movie) {
		Movie m=new Movie("","","",0);
		m.set_movieName(movie.getString("name"));
		m.set_director(movie.getString("director"));
		m.set_producer(movie.getString("producer"));
		m.set_year(movie.getInt("year"));
		return m;
	}
}
