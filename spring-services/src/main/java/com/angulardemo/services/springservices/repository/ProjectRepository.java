package com.angulardemo.services.springservices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angulardemo.services.springservices.model.projects.ProjectInfo;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectInfo, Integer>{
	
	List<ProjectInfo> findAllByStatusIdNotOrderByCreatedOnDesc(int statusId);
	
	List<ProjectInfo> findAllByStatusIdNotOrderByDueDateAsc(int statusId);
}
