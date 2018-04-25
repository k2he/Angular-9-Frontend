package com.angulardemo.services.springservices.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.angulardemo.services.springservices.model.user.UserInfo;
import com.angulardemo.services.springservices.repository.UserRepository;

@Service
public class JwtUserDetails implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

//	private UserRepository userRepository;
//
//	public JwtUserDetails(UserRepository userRepository) {
//		this.userRepository = userRepository;
//	}

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<UserInfo> userOption = userRepository.findByUsername(username);

		userOption.orElseThrow(()-> new UsernameNotFoundException("User '" + username + "' not found"));

		UserInfo user = userOption.get();
		
	    return User.withUsername(username)
	        .password(user.getPassword())
	        .authorities(user.getRoles())
	        .accountExpired(false)
	        .accountLocked(false)
	        .credentialsExpired(false)
	        .disabled(false)
	        .build();
	}

}
