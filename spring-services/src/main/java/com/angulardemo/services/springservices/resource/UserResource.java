package com.angulardemo.services.springservices.resource;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angulardemo.services.springservices.model.Users;
import com.angulardemo.services.springservices.repository.UserRepository;

@RestController
@RequestMapping("/rest/users")
public class UserResource {

	@Autowired
	UserRepository userReps;
	
	@GetMapping("/all")
	public List<Users> getAll() {
		return userReps.findAll();
	}
	
	@GetMapping("/name")
	public List<Users> getUser(@RequestParam() final String name) {
		Optional<List<Users>> optionalResult =  userReps.findByName(name);
		List<Users> result = optionalResult.orElse(new ArrayList<>());
		return result;
	}
	
	@GetMapping("/id")
	public Users getUserById(@RequestParam() Integer id) {
		return userReps.findOne(id);
	}
	
	@GetMapping("/update")
	public Users update(@RequestParam Integer id, @RequestParam String name) {
		Users user = getUserById(id);
		user.setName(name);
		return userReps.save(user);
	}
}
