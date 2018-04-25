package com.angulardemo.services.springservices.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.angulardemo.services.springservices.model.user.UserInfo;
import com.angulardemo.services.springservices.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
    private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<UserInfo> user = userRepository.findByUsername(username);
		
		user.orElseThrow(()-> new UsernameNotFoundException("Username: "+ username + " doesn't exist."));
        
		UserInfo userInfo = user.get();
		List<GrantedAuthority> authorities = new ArrayList<>();
		userInfo.getRoles().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority(role.getRoleName()));
		});
		
		return new User(userInfo.getUsername(), userInfo.getPassword(), authorities);
	}

}
