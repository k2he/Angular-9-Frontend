package com.angulardemo.services.springservices.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.angulardemo.services.springservices.model.projects.Enums;
import com.angulardemo.services.springservices.model.projects.ProjectInfo;
import com.angulardemo.services.springservices.model.projects.Enums.PStatus;
import com.angulardemo.services.springservices.repository.ProjectRepository;
import com.angulardemo.services.springservices.service.ProjectService;

@Service("projectService")
public class ProjectServiceImpl implements ProjectService{

	@Autowired
	ProjectRepository repository;
	
	String userID = "testUser1";//This should get from session
	
	@Override
	public List<ProjectInfo> getAllProjects() {
		return repository.findAllByStatusIdNotOrderByDueDateAsc(PStatus.DELETED.getValue());
	}

	@Override
	public ProjectInfo createProject(ProjectInfo info) {
		return repository.save(info);
	}

	@Override
	public ProjectInfo getProjectById(Integer id) {
		return repository.findOne(id);
	}

	@Override
	public ProjectInfo updateProject(ProjectInfo info) {
		ProjectInfo project = repository.findOne(info.getProjectId());
		if (project == null) {
			return null;
		}
		
		project.setProjectName(info.getProjectName());
		project.setProjectSummary(info.getProjectSummary());
		project.setDueDate(info.getDueDate());
		project.setEstimatedCost(info.getEstimatedCost());
		project.setProjectStatus(info.getProjectStatus());
		project.setCreatedOn(info.getCreatedOn());
		project.setCreatedBy(info.getCreatedBy());
		project.setUpdatedOn(info.getCreatedOn());
		project.setLastUpdatedBy(info.getLastUpdatedBy());

		return repository.save(project);
	}

	@Override
	public ProjectInfo deleteProject(Integer id) {
		ProjectInfo project = repository.findOne(id);
		if (project == null) {
			return null;
		}
		project.setLastUpdatedBy(userID);
		project.setStatusId(Enums.PStatus.DELETED.getValue());
		
		repository.save(project);
		return project;
	}

}
