package com.angulardemo.services.springservices.resource;

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

import com.angulardemo.services.springservices.model.projects.ProjectInfo;
import com.angulardemo.services.springservices.repository.ProjectRepository;

enum PStatus {
    PENDING(1),
    ACCEPTED(2),
    STARTED(3),
    COMPLETED(4),
    RETURNED(5),
    DELETED(6);
	
	private int id;
    private PStatus(int id) {
        this.id = id;
    }
    public int getValue() {
        return id;
    }
}

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/projects")
public class ProjectResource {

	String userID = "testUser1";//This should get from session
	
	@Autowired
	ProjectRepository repository;
	
	//Get All projects
	@GetMapping("/project")
	public List<ProjectInfo> getAllProjects() {
		List<ProjectInfo> result = repository.findAllByStatusIdNotOrderByDueDateAsc(PStatus.DELETED.getValue());
		return result;
	}
	
	//Create a new project
	@PostMapping("/project")
	public ProjectInfo createProject(@Valid @RequestBody ProjectInfo info) {
		return repository.save(info);
	}
	
	//Get a single project
	@GetMapping("/project/{id}")
	public ResponseEntity<ProjectInfo> getMessageById(@PathVariable(value = "id") Integer id) {
		ProjectInfo info = repository.findOne(id);
		if (info == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(info);
	}
	
	//Update a project
	@PutMapping("/project/{id}")
	public ResponseEntity<ProjectInfo> updateMessage(@PathVariable(value = "id") Integer id, @Valid @RequestBody ProjectInfo info) {
		ProjectInfo project = repository.findOne(id);
		if (project == null) {
			return ResponseEntity.notFound().build();
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

		ProjectInfo result = repository.save(project);
		return ResponseEntity.ok().body(result);
	}
	
	//Delete (set isActive to be false and leave in database)
	@DeleteMapping("/project/{id}")
	public ResponseEntity<Void> deleteProject(@PathVariable(value = "id") Integer id) {
		ProjectInfo project = repository.findOne(id);
		if (project == null) {
			return ResponseEntity.notFound().build();
		}
		project.setLastUpdatedBy(userID);
		project.setStatusId(PStatus.DELETED.getValue());
		
		repository.save(project);
		return ResponseEntity.ok().build();
	}
}
