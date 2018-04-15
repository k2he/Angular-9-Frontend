package com.angulardemo.services.springservices.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angulardemo.services.springservices.model.projects.Enums.PStatus;
import com.angulardemo.services.springservices.model.projects.ProjectInfo;
import com.angulardemo.services.springservices.service.ProjectService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/projects")
public class ProjectController {

	String userID = "testUser1";//This should get from session
	
	@Autowired
	ProjectService projectService;
	
	//Get All projects
	@GetMapping("/project")
	public List<ProjectInfo> getAllProjects() {
		return projectService.getAllProjects();
	}
	
	//Create a new project
	@PostMapping("/project")
	public ProjectInfo createProject(@Valid @RequestBody ProjectInfo info) {
		return projectService.createProject(info);
	}
	
	//Get a single project
	@GetMapping("/project/{id}")
	public ResponseEntity<ProjectInfo> getProjectById(@PathVariable(value = "id") Integer id) {
		ProjectInfo info = projectService.getProjectById(id);
		if (info == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(info);
	}
	
	//Update a project
	@PutMapping("/project/{id}")
	public ResponseEntity<ProjectInfo> updateProject(@PathVariable(value = "id") Integer id, @Valid @RequestBody ProjectInfo info) {
		ProjectInfo project = projectService.updateProject(info);
		if (project == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(project);
	}
	
	//Delete (set isActive to be false and leave in database)
	@DeleteMapping("/project/{id}")
	public ResponseEntity<Void> deleteProject(@PathVariable(value = "id") Integer id) {
		ProjectInfo deletedProject = projectService.deleteProject(id);
		
		if (deletedProject == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().build();
	}
}
