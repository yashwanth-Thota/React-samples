package com.yashwanth.guesswhat.utils;

import com.yashwanth.guesswhat.utils.models.MovieFilter;

public class FilterBuilder {

	public static MovieFilter createFilter(String searchKey) {

		MovieFilter filter = new MovieFilter();
		if (searchKey != null) {
			String[] filterKeys = searchKey.split(" ");
			int length=filterKeys.length;
			for(String s:filterKeys) System.out.print(s+"|");
			
				if (length>0&&!isEmptyString(filterKeys[0]))
					filter.set_movieName(filterKeys[0]);

				if (length>1&&!isEmptyString(filterKeys[1]))
					filter.set_movieDirector(filterKeys[1]);
				
				if (length>2&&!isEmptyString(filterKeys[2]))
					filter.set_movieProducer(filterKeys[2]);
				
				if (length>3&&!isEmptyString(filterKeys[3]))
					filter.set_year(Integer.parseInt(filterKeys[3]));
			
		}
		return filter;
	}

	private static boolean isEmptyString(String str) {
		return str.length() == 0;
	}
}
