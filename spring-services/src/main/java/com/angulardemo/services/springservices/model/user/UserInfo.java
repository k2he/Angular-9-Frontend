package com.angulardemo.services.springservices.model.user;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="app_user", catalog= "my_database")
public class UserInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "user_name")
    private String username;
	
	@JsonIgnore
	private String password;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
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
	
	/**
     * Roles are being eagerly loaded here because they are a fairly small collection of items for this example.
     */
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", 
            joinColumns= @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private List<Role> roles;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
}
