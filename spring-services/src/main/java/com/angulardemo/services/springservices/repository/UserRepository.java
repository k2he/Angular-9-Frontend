package com.angulardemo.services.springservices.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angulardemo.services.springservices.model.user.UserInfo;

@Repository
public interface UserRepository extends JpaRepository<UserInfo, Long>{
	Optional<UserInfo> findByUsername(String username);
}
