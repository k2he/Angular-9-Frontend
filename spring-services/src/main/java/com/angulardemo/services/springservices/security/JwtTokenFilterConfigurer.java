package com.angulardemo.services.springservices.security;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtTokenFilterConfigurer extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity>{
	
	private JwtTokenHandler jwtTokenhandler;

	public JwtTokenFilterConfigurer(JwtTokenHandler jwtTokenhandler) {
		this.jwtTokenhandler = jwtTokenhandler;
	}
	
	@Override
	public void configure(HttpSecurity http) throws Exception {
		JwtAuthenticationFilter jwtFilter = new JwtAuthenticationFilter(jwtTokenhandler);
	    http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
	}
}
