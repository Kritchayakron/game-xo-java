package com.example.oxgame;

import java.sql.Date;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class OxgameApplication {
	
	public Date createdAt;
	public static void main(String[] args) {
		//String path  = System.getenv("CONFIG"); 
		SpringApplication.run(OxgameApplication.class, args);
		
		
	}
}
