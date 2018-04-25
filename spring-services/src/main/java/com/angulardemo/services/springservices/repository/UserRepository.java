package com.angulardemo.services.springservices.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angulardemo.services.springservices.model.user.UserInfo;

@Repository
public interface UserRepository extends JpaRepository<UserInfo, Long>{
	Optional<UserInfo> findByUsername(String username);
	
	boolean existsByUsername(String username);

	@Transactional
	void deleteByUsername(String username);
}
