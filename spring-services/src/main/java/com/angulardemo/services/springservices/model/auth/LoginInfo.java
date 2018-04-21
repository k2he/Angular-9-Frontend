package com.angulardemo.services.springservices.model.auth;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class LoginInfo {
	private String username;
    private String password;
    
    
	public LoginInfo() {
	}

	public LoginInfo(String username, String password) {
		this.username = username;
		this.password = password;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public UsernamePasswordAuthenticationToken toAuthenticationToken() {
        return new UsernamePasswordAuthenticationToken(username, password);
    }
}
