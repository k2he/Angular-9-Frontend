package com.angulardemo.services.springservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angulardemo.services.springservices.model.ProjectInfo;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectInfo, Integer>{
	
}
