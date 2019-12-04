package com.yashwanth.guesswhat.filters;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yashwanth.guesswhat.utils.DBHelper;
import com.yashwanth.guesswhat.utils.FilterBuilder;

public class SearchFilter extends HttpFilter {

	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {		
		if(req.getMethod().equals("GET")) {
			String search=req.getParameter("search");
			System.out.println(search);
			DBHelper.collectMovies(FilterBuilder.createFilter(search));
		}
		
		chain.doFilter(req, res);
	}
}
