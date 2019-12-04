package com.yashwanth.guesswhat.utils.models;

import org.json.JSONObject;

public class Movie implements Comparable<Movie>{
	
	private String _movieName;
	private int _year;
	private String _director;
	private String _producer;
	
	public Movie(String name,String producer,String direct,int year) {
		this._movieName=name;this._director=direct;this._producer=producer;this._year=year;}
	
	public String get_movieName() {
		return _movieName;
	}
	
	public void set_movieName(String _movieMame) {
		this._movieName = _movieMame;
	}
	
	public int get_year() {
		return _year;
	}
	
	public void set_year(int _year) {
		this._year = _year;
	}
	
	public String get_director() {
		return _director;
	}
	
	public void set_director(String _director) {
		this._director = _director;
	}
	
	public String get_producer() {
		return _producer;
	}
	
	public void set_producer(String _producer) {
		this._producer = _producer;
	}
	
	@Override
	public String toString() {
		return "{name:"+get_movieName()+",year:"+get_year()+",director:"+get_director()+",producer:"+get_producer()+"}";
	}
	
	public JSONObject getMovieJson() {
		return new JSONObject(toString());
	}

	@Override
	public int compareTo(Movie o) {
		return this.get_movieName().compareTo(o.get_movieName());
	}
	
	@Override
	public int hashCode() {
		
		return super.hashCode();
	}
	
	@Override
	public boolean equals(Object obj) {
		
		return super.equals(obj);
	}
}
