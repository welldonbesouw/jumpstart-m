package com.jumpstart.music.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jumpstart.music.models.User;
import com.jumpstart.music.payload.request.UpdateRequest;
import com.jumpstart.music.repository.UserRepository;

@RestController
@RequestMapping("/me/api/user")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public ResponseEntity<String> updateUserDetails(@PathVariable Long id, @RequestBody UpdateRequest update) {
		try {
		      User user = userRepository.findById(update.getId())
		        .orElseThrow(() -> new NotFoundException());

		      // Update the user account details
		      user.setFirstName(update.getFirstName());
		      user.setLastName(update.getLastName());
		      user.setUsername(update.getUsername());
		      user.setEmail(update.getEmail());
		      user.setAddress(update.getAddress());

		      userRepository.save(user);

		      return ResponseEntity.ok("Account details updated successfully");
		    } catch (NotFoundException e) {
		      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		    } catch (Exception e) {
		      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
		          .body("Failed to update account details: " + e.getMessage());
		    }
		  }
	
}
