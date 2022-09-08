package com.giit.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/server")
public class BaseController {
	
	@GetMapping("/hello")
	public ResponseEntity<String> helloWorld() {
		
		RestTemplate restTemplate = new RestTemplate();
		String url = "java-downstream-service:7090/client/hello";
		ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
		return response;
	}
}
