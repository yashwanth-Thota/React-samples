package com.yashwanth.guesswhat.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONObject;

import com.yashwanth.guesswhat.utils.models.Movie;
import com.yashwanth.guesswhat.utils.models.MovieFilter;
import com.yashwanth.guesswhat.utils.DataSource;
public class DBHelper {

	public static ArrayList<Movie> viewList=new ArrayList<Movie>();
	
	public static Movie addMovie(JSONObject movie) {
		
		//request movie builder to create movie
		Movie m=MovieBuilder.createMovie(movie);
		
		/*
		 *	check if movie is already recorded
		 *	if already present return null 
		 */
		if(isMovieRecorded(m)) return null;
		
		/*
		 * if movie is not recorded add movie to record movieList
		 */
		
		DataSource.movieList.add(m);
		return m;
	}
	
	static boolean isMovieRecorded(Movie movie) {
		return DataSource.movieList.stream().anyMatch(m->movie.get_movieName().equals(m.get_movieName()));	
	}
	/*
	public static ArrayList<Movie> getMovies() {
		viewList=DataSource.movieList;
		orderMovies("name","ASC");
		return viewList;
	}
	
	public static void collectMovies(MovieFilter filter) {
		viewList=filterMovies(filter);
	}
	
	private static ArrayList<Movie> filterMovies(MovieFilter filter){
		return (ArrayList<Movie>) viewList.stream().filter(movie->{
			
			boolean isFiltered=true;

			if(filter.get_movieName()!=null 
					&&! movie.get_movieName().contains(filter.get_movieName())) isFiltered=false;
			
			if(filter.get_movieDirector()!=null 
					&&! movie.get_director().contains(filter.get_movieDirector())) isFiltered=false;
			
			if(filter.get_movieProducer()!=null
					&& !movie.get_producer().contains(filter.get_movieProducer())) isFiltered=false;
			
			if(filter.get_year()!=0 
					&& movie.get_year()!=filter.get_year()) isFiltered=false;
			
			return isFiltered;
			
		}).collect(Collectors.toList());
	}
	*/
	public static void orderMovies(String orderBy,String order){
		switch (orderBy) {
		case "director":
			viewList.sort(new Comparator<Movie>() {

				@Override
				public int compare(Movie o1, Movie o2) {
					
					return o1.get_director().compareTo(o2.get_director());
				}
			});
			break;
		case "producer":
			viewList.sort(new Comparator<Movie>() {

				@Override
				public int compare(Movie o1, Movie o2) {
					
					return o1.get_producer().compareTo(o2.get_producer());
				}
			});
			break;
		case "year":
			viewList.sort(new Comparator<Movie>() {

				@Override
				public int compare(Movie o1, Movie o2) {
					
					return o1.get_year()-o2.get_year();
				}
			});
			break;
		default:
			Collections.sort(viewList);
			break;
		}
		if(!order.equals("DESC")) Collections.reverse(viewList);
	}
	
	/*
	 * uncomment to access servlet as API endpoint
	 */
	
	
	public static JSONArray getMovies() {
		return getMoviesJSONArray(viewList);
	}
	
	public static void collectMovies(MovieFilter filter) {
		filterMovies(filter);
	}
	
	private static void filterMovies(MovieFilter filter){
		viewList= (ArrayList<Movie>)DataSource.movieList.stream().filter(movie->{
			
			boolean isFiltered=true;
			System.out.println(movie);
			
			if(filter.get_movieName()!=null ) 
					 isFiltered=movie.get_movieName().contains(filter.get_movieName());

			if(filter.get_movieDirector()!=null &&isFiltered)
					 isFiltered=movie.get_director().contains(filter.get_movieDirector());
			
			if(filter.get_movieProducer()!=null&&isFiltered)
					isFiltered=movie.get_producer().contains(filter.get_movieProducer());
			
			if(filter.get_year()!=0 &&isFiltered) 
				isFiltered=movie.get_year()==filter.get_year();
			
			System.out.println(filter+"|filtered"+isFiltered);
			return isFiltered;
			
		}).collect(Collectors.toList());
	}
	private static JSONArray getMoviesJSONArray(ArrayList<Movie> movies) {
		String jsonMovies="[";
		for(Movie m:movies) {
			jsonMovies+=","+m;
		}
		return new JSONArray(jsonMovies+"]");
	}
	
}
