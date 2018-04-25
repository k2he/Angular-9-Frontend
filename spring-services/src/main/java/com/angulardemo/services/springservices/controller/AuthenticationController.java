package com.angulardemo.services.springservices.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.angulardemo.services.springservices.dto.LoginDTO;
import com.angulardemo.services.springservices.security.JwtAuthenticationToken;
import com.angulardemo.services.springservices.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.POST)
    public JwtAuthenticationToken login(@RequestBody LoginDTO info) {
		String token = userService.login(info.getUsername(), info.getPassword());
		return new JwtAuthenticationToken(token);
    }
}
