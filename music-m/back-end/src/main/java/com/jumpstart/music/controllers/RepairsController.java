package com.jumpstart.music.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jumpstart.music.models.Repairs;
import com.jumpstart.music.payload.request.RepairsRequest;
import com.jumpstart.music.payload.response.MessageResponse;
import com.jumpstart.music.repository.RepairsRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/music")
public class RepairsController {

	@Autowired
	private RepairsRepository repairsRepository;
	
	@PostMapping("/repairs")
	public ResponseEntity<?> repairRequest(@Valid @RequestBody RepairsRequest repairReq) {
		Repairs repairs = new Repairs(repairReq.getName(), repairReq.getPhoneNumber(),
						repairReq.getInstrument(), repairReq.getProblem());
		repairsRepository.save(repairs);
		
		return ResponseEntity.ok(new MessageResponse("Repair request has been sent successfully! Please wait for our team to contact you for the estimated cost. It will not take more than 1 day."));
	}
}
