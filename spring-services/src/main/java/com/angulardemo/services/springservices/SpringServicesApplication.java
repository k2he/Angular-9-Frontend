package com.angulardemo.services.springservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages="com.angulardemo.services.springservices.repository")
@SpringBootApplication
public class SpringServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringServicesApplication.class, args);
	}
}
