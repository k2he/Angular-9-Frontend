package com.angulardemo.services.springservices.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angulardemo.services.springservices.model.Users;

public interface UserRepository extends JpaRepository<Users, Integer>{

	Optional<List<Users>> findByName(String name);
}
