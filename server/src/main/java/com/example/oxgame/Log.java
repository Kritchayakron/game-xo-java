package com.example.oxgame;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

public class Log {
	private long _id;
	private String reference;
	private String name;
	private int box;
	
	private String createdAt;
	

	public Log(long _id, String reference, String name, int box, String createdAt) {
		super();
		this._id = _id;
		this.reference = reference;
		this.name = name;
		this.box = box;
		this.createdAt = createdAt;
	}
	
	public Log()
	{
		
	}


	public long get_id() {
		return _id;
	}


	public void set_id(long _id) {
		this._id = _id;
	}


	public String getReference() {
		return reference;
	}


	public void setReference(String reference) {
		this.reference = reference;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getBox() {
		return box;
	}


	public void setBox(int box) {
		this.box = box;
	}


	public String getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
	
	


}
