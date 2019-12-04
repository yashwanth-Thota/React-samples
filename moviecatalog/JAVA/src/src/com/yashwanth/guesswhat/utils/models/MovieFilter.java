package com.yashwanth.guesswhat.utils.models;

public class MovieFilter {
	private String _movieName;
	private String _movieDirector;
	private String _movieProducer;
	private int _year=0;
	
	public MovieFilter() {}
	
	public String get_movieName() {
		return _movieName;
	}
	
	public void set_movieName(String _movieName) {
		this._movieName = _movieName;
	}
	
	public String get_movieDirector() {
		return _movieDirector;
	}
	
	public void set_movieDirector(String _movieDirector) {
		this._movieDirector = _movieDirector;
	}
	
	public String get_movieProducer() {
		return _movieProducer;
	}
	
	public void set_movieProducer(String _movieProducer) {
		this._movieProducer = _movieProducer;
	}
	
	public int get_year() {
		return _year;
	}
	
	public void set_year(int _year) {
		this._year = _year;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return get_movieDirector()+"|"+get_movieName()+"|"+get_movieProducer()+"|"+get_year();
	}
}
