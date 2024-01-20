package com.jumpstart.music.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jumpstart.music.models.Brand;

public interface BrandRepository extends JpaRepository<Brand, Long> {
	List<Brand> findByNameContainingIgnoreCase(String keyword);
}
