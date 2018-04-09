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

import com.angulardemo.services.springservices.model.ContactUsInfo;
import com.angulardemo.services.springservices.service.ContactService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/contactus")
public class ContactUsResource {

	@Autowired
	ContactService contactService;
	
	//Get All contact note messages
	@GetMapping("/messages")
	public List<ContactUsInfo> getAllMessages() {
		return contactService.getAllMessages();
	}
	
	//Create a new note message
	@PostMapping("/messages")
	public ContactUsInfo createMessage(@Valid @RequestBody ContactUsInfo info) {
		return contactService.createMessage(info);
	}
	
	//Get a single not message
	@GetMapping("/messages/{id}")
	public ResponseEntity<ContactUsInfo> getMessageById(@PathVariable(value = "id") Integer id) {
		ContactUsInfo message = contactService.getMessageById(id);
		if (message == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(message);
	}
	
	//Update a note message
	@PutMapping("/messages/{id}")
	public ResponseEntity<ContactUsInfo> updateMessage(@PathVariable(value = "id") Integer id, @Valid @RequestBody ContactUsInfo info) {
		ContactUsInfo message = contactService.updateMessage(info);
		if (message == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(message);
	}
	
	//Delete a note (set as resolved and leave in database)
	@DeleteMapping("/messages/{id}")
	public ResponseEntity<ContactUsInfo> deleteMessage(@PathVariable(value = "id") Integer id) {
		ContactUsInfo message = contactService.deleteMessage(id);
		if (message == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().build();
	}
	
}
