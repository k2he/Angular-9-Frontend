package com.angulardemo.services.springservices.service;

import java.util.Optional;

import com.angulardemo.services.springservices.model.user.UserInfo;

public interface SecurityContextService {
	Optional<UserInfo> getUser(String username);
}
