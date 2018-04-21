package com.angulardemo.services.springservices.service.impl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.angulardemo.services.springservices.model.auth.JwtUserAuthentication;
import com.angulardemo.services.springservices.security.JwtTokenHandler;
import com.angulardemo.services.springservices.service.TokenAuthenticationService;

@Service
public class TokenAuthenticationServiceImpl implements TokenAuthenticationService{

	@Autowired
	private JwtTokenHandler tokenHandler;
	
	@Override
	public Authentication getAuthentication(HttpServletRequest request) {
		final String authHeader = request.getHeader("authorization");
        if (authHeader == null) {
        	return null;
        }
        if (!authHeader.startsWith("Bearer")) {
        	return null;
        }

        final String jwtToken = authHeader.substring(7);
        if (jwtToken.isEmpty()) {
        	return null;
        }
        return tokenHandler.parseUserFromToken(jwtToken)
                .map(JwtUserAuthentication::new)
                .orElse(null);
	}

}
