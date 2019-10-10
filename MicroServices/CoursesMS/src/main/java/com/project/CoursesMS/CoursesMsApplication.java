package com.project.CoursesMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient
public class CoursesMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoursesMsApplication.class, args);
	}

	@Bean
	public RestTemplate restService() {
		RestTemplate restTemplate = new RestTemplate();
		return restTemplate;
	}
}
