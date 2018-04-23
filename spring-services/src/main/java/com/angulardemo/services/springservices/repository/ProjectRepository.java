package com.angulardemo.services.springservices.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.angulardemo.services.springservices.model.projects.ProjectInfo;

@Repository
public interface ProjectRepository extends CrudRepository<ProjectInfo, Integer>{
	
	List<ProjectInfo> findAllByStatusIdNotOrderByCreatedOnDesc(int statusId);
	
	List<ProjectInfo> findAllByStatusIdNotOrderByDueDateAsc(int statusId);
}
