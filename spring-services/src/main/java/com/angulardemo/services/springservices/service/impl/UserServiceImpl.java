package com.angulardemo.services.springservices.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.angulardemo.services.springservices.exception.CustomException;
import com.angulardemo.services.springservices.model.user.UserInfo;
import com.angulardemo.services.springservices.repository.UserRepository;
import com.angulardemo.services.springservices.security.JwtTokenHandler;
import com.angulardemo.services.springservices.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenHandler jwtTokenHandler;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	
	@Override
	public String login(String username, String password) {
	    try {
	      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
	      return jwtTokenHandler.createToken(username, repository.findByUsername(username).get().getRoles());
	    } catch (AuthenticationException e) {
	      throw new CustomException("Invalid username/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
	    }
	}
	
	@Override
	public String signup(UserInfo user) {
	    if (!repository.existsByUsername(user.getUsername())) {
	      user.setPassword(passwordEncoder.encode(user.getPassword()));
	      repository.save(user);
	      return jwtTokenHandler.createToken(user.getUsername(), user.getRoles());
	    } else {
	      throw new CustomException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
	    }
	}
	
	@Override
	public List<UserInfo> getAllUsers() {
		return repository.findAll();
	}

	@Override
	public UserInfo createUser(UserInfo info) {
		return repository.save(info);
	}

}
