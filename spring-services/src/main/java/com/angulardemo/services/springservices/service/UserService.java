package com.angulardemo.services.springservices.service;

import java.util.List;

import com.angulardemo.services.springservices.model.user.UserInfo;

public interface UserService {
	public String login(String username, String password);
	public String signup(UserInfo user);
	
	public List<UserInfo> getAllUsers();
	public UserInfo createUser(UserInfo info);
}
