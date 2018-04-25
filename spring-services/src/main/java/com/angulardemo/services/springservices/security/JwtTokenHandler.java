package com.angulardemo.services.springservices.security;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.angulardemo.services.springservices.exception.CustomException;
import com.angulardemo.services.springservices.model.user.Role;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenHandler {
	
	@Autowired
	private JwtUserDetails jwtUserDetails;
	
	/**
	 * THIS IS NOT A SECURE PRACTICE! For simplicity, we are storing a static key here. Ideally, in a
	 * microservices environment, this key would be kept on a config-server.
	*/
	@Value("${app.jwt.secret}")
	private String secretKey;
	
	@Value("${app.jwt.expire-length.milliseconds}")
	private long validityInMilliseconds;
	
	public String createToken(String username, List<Role> roles) {

	    Claims claims = Jwts.claims().setSubject(username);
	    claims.put("auth", roles.stream().map(s -> new SimpleGrantedAuthority(s.getAuthority())).filter(Objects::nonNull).collect(Collectors.toList()));

	    Date now = new Date();
	    Date validity = new Date(now.getTime() + validityInMilliseconds);

	    return Jwts.builder()
	        .setClaims(claims)
	        .setIssuedAt(now)
	        .setExpiration(validity)
	        .signWith(SignatureAlgorithm.HS256, secretKey)
	        .compact();
	}
	
	public String resolveToken(HttpServletRequest req) {
	    String bearerToken = req.getHeader("Authorization");
	    if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
	      return bearerToken.substring(7, bearerToken.length());
	    }
	    return null;
	}
	
	public boolean validateToken(String token) {
	    try {
	      Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
	      return true;
	    } catch (JwtException | IllegalArgumentException e) {
	      throw new CustomException("Expired or invalid JWT token", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	public Authentication getAuthentication(String token) {
	    UserDetails userDetails = jwtUserDetails.loadUserByUsername(getUsername(token));
	    return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
	}
	
	public String getUsername(String token) {
	    return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
	}
	
}
