package com.example.demo;

public class Movie {
	private int id;
	private String name;
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
	public Movie(int id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.rating=0;
	}
	public Movie() {}
}
