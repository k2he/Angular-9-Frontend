package com.angulardemo.services.springservices.model.auth;

public class JwtAuthenticationToken {

	private String token;
	
	public JwtAuthenticationToken(String token) {
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
