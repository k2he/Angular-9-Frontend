package com.angulardemo.services.springservices.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="contact_us", catalog= "my_database")
@EntityListeners(AuditingEntityListener.class)
public class ContactUsInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@NotBlank
	@Size(min=1, max=20)
	private String name;
	@NotBlank
	@Size(min=1, max=100)
	private String email;
	
	@NotBlank
	@Size(min=1, max=12)
	private String phoneNumber;
	
	@NotBlank
	@Size(min=1, max=50)
	private String subject;
	
	@NotBlank
	@Size(min=1, max=500)
	private String message;
	
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	@Column(name = "created_on")
	private Date createdOn;
	
	@LastModifiedDate
	@Column(name = "updated_on")
	private Date updatedOn;
	
	@Column(name = "resolved")
	private Boolean isResolved;
	
	@Column(name = "resolved_by")
	private String resovedBy;
	
	public ContactUsInfo() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	
	public String getResovedBy() {
		return resovedBy;
	}

	public void setResovedBy(String resovedBy) {
		this.resovedBy = resovedBy;
	}
}
