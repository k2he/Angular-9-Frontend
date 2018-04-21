package com.angulardemo.services.springservices.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angulardemo.services.springservices.model.user.UserInfo;
import com.angulardemo.services.springservices.repository.UserRepository;
import com.angulardemo.services.springservices.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository repository;
	
	@Override
	public List<UserInfo> getAllUsers() {
		return repository.findAll();
	}

	@Override
	public UserInfo createUser(UserInfo info) {
		return repository.save(info);
	}

}
