package com.angulardemo.services.springservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angulardemo.services.springservices.dto.UserDataDTO;
import com.angulardemo.services.springservices.model.user.UserInfo;
import com.angulardemo.services.springservices.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
//	@Autowired
//	private ModelMapper modelMapper;
	
	@PostMapping("/signup")
	public String signup(@RequestBody UserDataDTO user) {
		return null;
		//TODO: need figure how the modelMapper works.
//	    return userService.signup(modelMapper.map(user, UserInfo.class));
	}
	
	@GetMapping("/user")
	public List<UserInfo> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@PostMapping("/sign-up")
    public void signUp(@RequestBody UserInfo user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userService.createUser(user);
    }
}
