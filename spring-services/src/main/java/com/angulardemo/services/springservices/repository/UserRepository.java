package com.angulardemo.services.springservices.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angulardemo.services.springservices.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer>{

	Optional<List<Users>> findByName(String name);
}
