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
import com.angulardemo.services.springservices.repository.ContactUsRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/contactus")
public class ContactUsResource {

	@Autowired
	ContactUsRepository contactRepository;
	
	//Get All contact note messages
	@GetMapping("/messages")
	public List<ContactUsInfo> getAllMessages() {
		return contactRepository.findAll();
	}
	
	//Create a new note message
	@PostMapping("/messages")
	public ContactUsInfo createMessage(@Valid @RequestBody ContactUsInfo info) {
		return contactRepository.save(info);
	}
	
	//Get a single not message
	@GetMapping("/messages/{id}")
	public ResponseEntity<ContactUsInfo> getMessageById(@PathVariable(value = "id") Integer id) {
		ContactUsInfo message = contactRepository.findOne(id);
		if (message == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(message);
	}
	
	//Update a note message
	@PutMapping("/messages/{id}")
	public ResponseEntity<ContactUsInfo> updateMessage(@PathVariable(value = "id") Integer id, @Valid @RequestBody ContactUsInfo info) {
		ContactUsInfo message = contactRepository.findOne(id);
		if (message == null) {
			return ResponseEntity.notFound().build();
		}
		message.setName(info.getName());
		message.setEmail(info.getEmail());
		message.setPhoneNumber(info.getPhoneNumber());
		message.setSubject(info.getSubject());
		message.setMessage(info.getMessage());

		ContactUsInfo result = contactRepository.save(message);
		return ResponseEntity.ok().body(result);
	}
	
	//Delete a note (set as resolved and leave in database)
	@DeleteMapping("/messages/{id}")
	public ResponseEntity<ContactUsInfo> deleteMessage(@PathVariable(value = "id") Integer id) {
		ContactUsInfo message = contactRepository.findOne(id);
		if (message == null) {
			return ResponseEntity.notFound().build();
		}
		contactRepository.delete(message);
		return ResponseEntity.ok().build();
	}
	
}
