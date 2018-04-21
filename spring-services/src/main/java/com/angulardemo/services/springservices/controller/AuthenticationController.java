package com.angulardemo.services.springservices.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.angulardemo.services.springservices.model.auth.JwtAuthenticationToken;
import com.angulardemo.services.springservices.model.auth.LoginInfo;
import com.angulardemo.services.springservices.security.JwtTokenHandler;
import com.angulardemo.services.springservices.service.SecurityContextService;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
	
	@Autowired
    private AuthenticationManager authenticationManager;
	@Autowired
	private SecurityContextService securityContextService;
	@Autowired
	private JwtTokenHandler tokenHandler;
	
	@RequestMapping(method = RequestMethod.POST)
    public JwtAuthenticationToken login(@RequestBody LoginInfo info) {
		System.out.println("info.getUsername(): " + info.getUsername() +  "  info.getPassword(): " + info.getPassword());
		UsernamePasswordAuthenticationToken loginToken = info.toAuthenticationToken();
		Authentication authentication = authenticationManager.authenticate(loginToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

//        Optional<UserInfo> u = securityContextService.getUser(authentication.getName());
//        UserInfo userInfo = u.get();
//        String testToken = tokenHandler.createTokenForUser(userInfo);
//        JwtAuthenticationToken jwt = new JwtAuthenticationToken(testToken);
        
        return securityContextService.getUser(authentication.getName()).map(user -> {
            String token = tokenHandler.createTokenForUser(user);
            return new JwtAuthenticationToken(token);
        }).orElseThrow(RuntimeException::new);
    }
}
