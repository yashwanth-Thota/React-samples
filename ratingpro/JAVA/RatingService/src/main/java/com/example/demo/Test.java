package com.example.demo;


public class Test {
	
	public static void masdain(String[] args) {
		Rating r=new Rating(1,1,4,"Hello");
		Rating r1=new Rating(2,1,5,"test");
		RatingService rt=new RatingService();
		rt.addRating(r);
		System.out.println(rt.addRating(r1)+""+DataSource.ratings.size());
		System.out.println(rt.addRating(r)+""+DataSource.ratings.size());
	}
}
