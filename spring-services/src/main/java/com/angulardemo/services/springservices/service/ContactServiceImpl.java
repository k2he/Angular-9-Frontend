package com.angulardemo.services.springservices.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.angulardemo.services.springservices.model.ContactUsInfo;
import com.angulardemo.services.springservices.repository.ContactUsRepository;

@Service("cotactService")
public class ContactServiceImpl implements ContactService {

	@Autowired
	ContactUsRepository contactRepository;

	@Override
	public List<ContactUsInfo> getAllMessages() {
		return contactRepository.findAll();
	}

	@Override
	public ContactUsInfo createMessage(ContactUsInfo info) {
		return contactRepository.save(info);
	}

	@Override
	public ContactUsInfo getMessageById(Integer id) {
		return contactRepository.findOne(id);
	}

	@Override
	public ContactUsInfo updateMessage(ContactUsInfo info) {
		ContactUsInfo message = contactRepository.findOne(info.getId());
		if (message == null) {
			return null;
		}
		message.setName(info.getName());
		message.setEmail(info.getEmail());
		message.setPhoneNumber(info.getPhoneNumber());
		message.setSubject(info.getSubject());
		message.setMessage(info.getMessage());

		return contactRepository.save(message);
	}

	@Override
	public ContactUsInfo deleteMessage(Integer id) {
		ContactUsInfo message = contactRepository.findOne(id);
		if (message == null) {
			return null;
		}
		contactRepository.delete(message);
		return message;
	}
}
