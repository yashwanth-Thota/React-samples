package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("/catalog")
public class MovieResource {
	@Autowired
	MovieCatalogServiceConfig configuration=new MovieCatalogServiceConfig();
	@GetMapping("/")
	public List<CatalogItem> getCatalogItems(){
		return DataSource.list;
	}
	@GetMapping("/{movieName}")
	public @ResponseBody CatalogItem getCatalogItem(@PathVariable("movieName")String movieName) {
		RestTemplate restTemplate=configuration.getRestTemplate();
		Movie m=restTemplate.getForObject("http://localhost:8082/movies/"+movieName, Movie.class);
		Rating r=restTemplate.getForObject("http://localhost:8083/ratings/"+m.getId(), Rating.class);
		return new CatalogItem(m.getName(),m.getDescription(),r.getRating());
	}
	
}
