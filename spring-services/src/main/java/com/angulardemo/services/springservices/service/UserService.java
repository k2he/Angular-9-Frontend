package com.angulardemo.services.springservices.service;

import java.util.List;

import com.angulardemo.services.springservices.model.user.UserInfo;

public interface UserService {
	List<UserInfo> getAllUsers();
	UserInfo createUser(UserInfo info);
}
