package com.example.demo;

import java.util.List;
import java.util.stream.Collectors;

import javax.websocket.server.PathParam;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/movies")
public class MovieInfoService {
	MovieInfoServiceConfig configuration=new MovieInfoServiceConfig();
	@GetMapping("/{name}")
	public @ResponseBody Movie getMovieInfo(@PathVariable("name")String name) {
		return DataSource.movies.stream().filter(p->p.getName().equals(name)).collect(Collectors.toList()).get(0);
	}
	@GetMapping("/")
	public List<Movie> getMovies(){
		return DataSource.movies;
	}
	@PostMapping("/add")
	public  boolean addMovie(@RequestBody Movie movie) {
		if(!DataSource.movies.stream().filter(p->p.getName().equals(movie.getName())).findAny().isPresent())
		{
			movie.setId(DataSource.movies.size()+1);
			DataSource.movies.add(movie);
			return true;
		}
		return false;
	}
	
	@GetMapping("/{name}/{rating}")
	public void rateMovie(@PathParam("name") String name,@PathParam("rating") int rating) {
		Movie m=DataSource.movies.stream().filter(p->p.getName().equals(name)).collect(Collectors.toList()).get(0);
		m.setRating((m.getRating()+rating)/2);
	}
}
