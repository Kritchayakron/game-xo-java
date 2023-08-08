package com.example.oxgame;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.InsertOneResult;

@RestController
@CrossOrigin
public class LogController {
	
	private Date createdAt;
	@PostMapping("/api/game")
	public void addData(@RequestBody Log todo) {
		
		String uri = "mongodb://localhost:27017/";
		
		try (MongoClient mongoClient = MongoClients.create(uri)) {
		    MongoDatabase database = mongoClient.getDatabase("ox-game");
		    	MongoCollection<Document> collection = database.getCollection("logs");
		
			 InsertOneResult result = collection.insertOne(new Document()
				        .append("_id", new ObjectId())
				        .append("reference", todo.getReference())
				        .append("name", todo.getName())
				        .append("box", todo.getBox())
				        .append("createdAt",  todo.getCreatedAt())

				);
			 
				System.out.println("Success! Inserted document id: " + result.getInsertedId());
        } catch (Exception e) {
            System.out.println("Something went wrong.");
        }
        
	}
}
