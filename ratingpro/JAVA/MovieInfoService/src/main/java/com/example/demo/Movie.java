package com.example.demo;

public class Movie {
	private int id;
	private String name;
	private int runTime;
	private String description;
	private int rating;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating=rating;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Movie(int runTime, String name, String description) {
		super();
		this.runTime= runTime;
		this.name = name;
		this.description = description;
		this.rating=0;
	}
	public Movie() {}
	public int getRunTime() {
		return runTime;
	}
	public void setRunTime(int runTime) {
		this.runTime = runTime;
	}
	@Override 
	public boolean equals(Object v) {
		Movie m=(Movie)v;
		return m.getName().equals(getName());
	}
}
