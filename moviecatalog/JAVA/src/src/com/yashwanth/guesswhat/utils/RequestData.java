package com.yashwanth.guesswhat.utils;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;

public class RequestData {
	public static JSONObject getRequestData(HttpServletRequest request) {
		String jsonData="",line=null;
		try {
			BufferedReader requestReader=request.getReader();
			while((line=requestReader.readLine()) != null) {
				jsonData+=line;
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return new JSONObject(jsonData);
	}
}
