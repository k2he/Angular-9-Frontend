package com.angulardemo.services.springservices.model.user;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Entity
@Table(name="app_role")
public class Role {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	 
	@Column(name="role_name")
	private String roleName;

	@Column(name="description")
	private String description;

	private Boolean active;
		
//	@Temporal(TemporalType.TIMESTAMP)
//	@CreatedDate
//	@Column(name = "created_on")
//	private Date createdOn;
//	
//	@LastModifiedDate
//	@Column(name = "updated_on")
//	private Date updatedOn;
	
//	@OneToOne(fetch = FetchType.LAZY)
//	@JoinTable(name = "app_user", 
//			joinColumns=@JoinColumn(name = "updatedBy", referencedColumnName = "id"))
//	private UserInfo updatedBy;
	 
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

//	public Date getCreatedOn() {
//		return createdOn;
//	}
//
//	public void setCreatedOn(Date createdOn) {
//		this.createdOn = createdOn;
//	}
//
//	public Date getUpdatedOn() {
//		return updatedOn;
//	}
//
//	public void setUpdatedOn(Date updatedOn) {
//		this.updatedOn = updatedOn;
//	}

//	public UserInfo getUpdatedBy() {
//		return updatedBy;
//	}
//
//	public void setUpdatedBy(UserInfo updatedBy) {
//		this.updatedBy = updatedBy;
//	}
}