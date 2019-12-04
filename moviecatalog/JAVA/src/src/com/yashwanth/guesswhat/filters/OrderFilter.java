package com.yashwanth.guesswhat.filters;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yashwanth.guesswhat.utils.DBHelper;

public class OrderFilter extends HttpFilter {

	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		if(req.getMethod().equals("GET")) {
			String orderBy=req.getParameter("orderBy");
			System.out.println("order");
			if(orderBy!=null)
				DBHelper.orderMovies(orderBy, req.getParameter("order"));
		}
		chain.doFilter(req, res);
	}
}
