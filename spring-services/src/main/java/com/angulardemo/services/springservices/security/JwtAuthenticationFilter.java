package com.angulardemo.services.springservices.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

@Component // one per request
public class JwtAuthenticationFilter extends GenericFilterBean {

	private JwtTokenHandler tokenHandler;
	
	public JwtAuthenticationFilter(JwtTokenHandler tokenHandler) {
		this.tokenHandler = tokenHandler;
	}

	@Override
	  public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain)
	      throws IOException, ServletException {
	    
	    String token = tokenHandler.resolveToken((HttpServletRequest) req);
	    if (token != null && tokenHandler.validateToken(token)) {
	      Authentication auth = tokenHandler.getAuthentication(token);
	      SecurityContextHolder.getContext().setAuthentication(auth);
	    }
	    filterChain.doFilter(req, res);
	}
}
