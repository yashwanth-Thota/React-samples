package com.example.demo;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ratings")
public class RatingService {
	RatingServiceConfig configuration=new RatingServiceConfig();
	
	@GetMapping("/{movieId}")
	public List<Rating> getRatings(@PathVariable("movieId")Integer movieId) {
		return DataSource.ratings.stream().filter(p->p.getMovieId()==movieId).collect(Collectors.toList());
	}
	
	@PostMapping("/")
	public boolean addRating(@RequestBody Rating rating){
		if(!DataSource.ratings.contains(rating))
		{
			DataSource.ratings.add(rating);
			//configuration.getRestTemplate().getForObject("http://localhost:8082/movies/"+rating.getMovieId()+"/"+rating.getRating(),boolean.class );
			return true;
		}
		return false;
	}
	@GetMapping("/rate/{movieId}")
	public Integer getRating(@PathVariable("movieId") Integer movieId) {
		Integer rating=0;
		for(Rating r:DataSource.ratings){
			if(r.getMovieId()==movieId) rating+=r.getRating();
		}
		if(DataSource.ratings.size()>0) rating=rating/DataSource.ratings.size(); 
		return rating;
	}
}
