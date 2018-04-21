package com.angulardemo.services.springservices.service.impl;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angulardemo.services.springservices.model.user.UserInfo;
import com.angulardemo.services.springservices.repository.UserRepository;
import com.angulardemo.services.springservices.service.SecurityContextService;

@Service
@Transactional
public class SecurityContextServiceImpl implements SecurityContextService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Optional<UserInfo> getUser(String username) {
		return userRepository.findByUsername(username);
	}

}
