package com.jumpstart.music.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jumpstart.music.models.Student;
import com.jumpstart.music.payload.request.EnrollRequest;
import com.jumpstart.music.payload.response.MessageResponse;
import com.jumpstart.music.repository.StudentRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/music")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@PostMapping("/enroll")
	public ResponseEntity<?> enrollStudent(@Valid @RequestBody EnrollRequest enrollRequest) {
		Student student = new Student(enrollRequest.getFullName(), enrollRequest.getAge(),
								enrollRequest.getPhoneNumber(), enrollRequest.getInstrument(),
								enrollRequest.getDelivery());
		studentRepository.save(student);
		
		return ResponseEntity.ok(new MessageResponse("Student enrolled successfully!"));
	}
}
