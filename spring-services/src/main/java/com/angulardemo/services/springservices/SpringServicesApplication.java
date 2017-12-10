package com.angulardemo.services.springservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SpringServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringServicesApplication.class, args);
	}
}
