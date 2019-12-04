package com.yashwanth.guesswhat.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yashwanth.guesswhat.utils.DBHelper;
import com.yashwanth.guesswhat.utils.models.Movie;

public class Test extends HttpServlet{

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Movie m=new Movie("test", "producer", "direct", 2019);
		resp.setContentType("json");
		resp.getWriter().println(DBHelper.getMovies());
	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(req, resp);
	}
}
