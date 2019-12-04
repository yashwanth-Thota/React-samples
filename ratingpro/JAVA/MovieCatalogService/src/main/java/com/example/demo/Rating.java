package com.example.demo;

public class Rating {
	private int movieId;
	private int rating;
	private String review;
	public int getMovieId() {
		return movieId;
	}
	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public Rating(int movieId, int rating, String review) {
		super();
		this.movieId = movieId;
		this.rating = rating;
		this.review = review;
	}
	public Rating() {}
}
