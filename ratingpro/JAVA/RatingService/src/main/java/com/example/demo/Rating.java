package com.example.demo;

public class Rating {
	private int movieId;
	private int rating;
	private String review;
	private int userId;
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
	public Rating(int movieId,int userId, int rating, String review) {
		super();
		this.userId=userId;
		this.movieId = movieId;
		this.rating = rating;
		this.review = review;
	}
	public Rating() {}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	@Override
	public boolean equals(Object v) {
			Rating r=(Rating)v;
			System.out.println(r.getMovieId()+"|"+r.getUserId());
			return getMovieId()==r.getMovieId()&&getUserId()==r.getUserId();
	}
}