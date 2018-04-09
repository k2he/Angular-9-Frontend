package com.angulardemo.services.springservices.service;

import java.util.List;

import com.angulardemo.services.springservices.model.projects.ProjectInfo;

public interface ProjectService {
	List<ProjectInfo> getAllProjects();
	ProjectInfo createProject(ProjectInfo info);
	ProjectInfo getProjectById(Integer id);
	ProjectInfo updateProject(ProjectInfo info);
	ProjectInfo deleteProject(Integer id);
}
