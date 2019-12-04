package com.example.demo;

import java.util.ArrayList;
import java.util.List;

public class DataSource {

	public static List<CatalogItem> list=new ArrayList<>();
	static {
		list.add(new CatalogItem("Avengers-End Game", "Iron Man dead", 8));
		list.add(new CatalogItem("Avengers-Infinity war", "Half of the world is wiped off!!!!!!!", 9));
	}
}
