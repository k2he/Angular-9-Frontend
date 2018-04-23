package com.angulardemo.services.springservices.service;

import java.util.List;

import com.angulardemo.services.springservices.model.ContactUsInfo;

public interface ContactService {
	List<ContactUsInfo> getAllMessages();
	ContactUsInfo createMessage(ContactUsInfo info);
	ContactUsInfo getMessageById(Integer id);
	ContactUsInfo updateMessage(ContactUsInfo info);
	void deleteMessage(Integer id);
}
