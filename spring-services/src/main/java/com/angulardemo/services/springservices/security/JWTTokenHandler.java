package com.angulardemo.services.springservices.security;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.angulardemo.services.springservices.model.user.JwtUserDetails;
import com.angulardemo.services.springservices.model.user.Role;
import com.angulardemo.services.springservices.model.user.UserInfo;
import com.angulardemo.services.springservices.repository.UserRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JWTTokenHandler {
	
	@Autowired
    private UserRepository userRepository;
	
	@Value("${app.jwt.secret}")
	private String secret;
	
    public String createTokenForUser(UserInfo user) {
        final ZonedDateTime expiration = ZonedDateTime.now().plusDays(1);//Valid for one day

        return Jwts.builder()
                .setSubject(user.getId().toString())
                .signWith(SignatureAlgorithm.HS512, secret)
                .setExpiration(Date.from(expiration.toInstant()))
                .compact();
    }
    
    public Optional<UserDetails> parseUserFromToken(String token) {
        final String subject = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
        UserInfo user = userRepository.findOne(Long.valueOf(subject));
        
        System.out.println("!!!!!!!! username: " + user.getUsername() + " Password:" + user.getPassword());
        JwtUserDetails userDetail = null;
        if (user!=null) {
        	userDetail = new JwtUserDetails();
            userDetail.setUserName(user.getUsername());
            userDetail.setPassword(user.getPassword());
            userDetail.setEnabled(user.getEnabled());
            List<SimpleGrantedAuthority> authoritieList = user.getRoles().stream()
            		.map(authoritie -> new SimpleGrantedAuthority(authoritie.getRoleName()))
            		.collect(Collectors.toList());
            userDetail.setAuthorities(authoritieList);
        }
        
        return Optional.ofNullable(userDetail);
    }
}
