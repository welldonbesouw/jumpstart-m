package com.jumpstart.music.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "students")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	private String fullName;
	
	@NotNull
	private int age;
	
	@NotBlank
	private String phoneNumber;
	
	@NotBlank
	private String instrument;
	
	@NotBlank
	private String delivery;
	
	private String level;
	
	public Student() {
	}

	public Student(String fullName, int age, String phoneNumber,
			String instrument, String delivery, String level) {
		super();
		this.fullName = fullName;
		this.age = age;
		this.phoneNumber = phoneNumber;
		this.instrument = instrument;
		this.delivery = delivery;
		this.level = level;
	}
	
	public Student(String fullName, int age, String phoneNumber,
			String instrument, String delivery) {
		super();
		this.fullName = fullName;
		this.age = age;
		this.phoneNumber = phoneNumber;
		this.instrument = instrument;
		this.delivery = delivery;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getInstrument() {
		return instrument;
	}

	public void setInstrument(String instrument) {
		this.instrument = instrument;
	}

	public String getDelivery() {
		return delivery;
	}

	public void setDelivery(String delivery) {
		this.delivery = delivery;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}
	
}
