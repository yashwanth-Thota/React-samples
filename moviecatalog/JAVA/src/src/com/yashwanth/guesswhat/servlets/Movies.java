package com.yashwanth.guesswhat.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yashwanth.guesswhat.utils.DBHelper;
import com.yashwanth.guesswhat.utils.DataSource;
import com.yashwanth.guesswhat.utils.RequestData;
import com.yashwanth.guesswhat.utils.models.Movie;

public class Movies extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	@Override
	public void init() throws ServletException {
		
		DataSource.movieList=new ArrayList<Movie>();
		DataSource.movieList.add(new Movie("BB","shobu","SSR",2017));
		DataSource.movieList.add(new Movie("Sahoo","REDDY","sujeeth",2019));
		DataSource.movieList.add(new Movie("RRR","DVV","SSR",2020));
		DBHelper.viewList=DataSource.movieList;
		super.init();
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		PrintWriter out=resp.getWriter();
//		for(Movie movie:DBHelper.getMovies()) {
//			out.print("<tr>");
//			out.print("<td>"+movie.get_movieName()+"</td>");
//			out.print("<td>"+movie.get_year()+"</td>");
//			out.print("<td>"+movie.get_director()+"</td>");
//			out.print("<td>"+movie.get_producer()+"</td>");
//			out.print("</tr>");
//		}
		out.println(DBHelper.getMovies());
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out=resp.getWriter();
		out.println(DBHelper.addMovie(RequestData.getRequestData(req)));
		out.flush();
		out.close();
	}
}
