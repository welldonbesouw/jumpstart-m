package com.jumpstart.music.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jumpstart.music.models.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
	List<Category> findByNameContainingIgnoreCase(String keyword);
}
