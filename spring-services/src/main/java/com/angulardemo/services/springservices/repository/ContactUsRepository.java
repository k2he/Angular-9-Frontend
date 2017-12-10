package com.angulardemo.services.springservices.repository;

import com.angulardemo.services.springservices.model.ContactUsInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUsInfo, Integer>{
	
}
