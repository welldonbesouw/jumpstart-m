package com.jumpstart.music.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jumpstart.music.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	List<Product> findByNameContainingIgnoreCase(String keyword);

    List<Product> findByBrandNameContainingIgnoreCase(String keyword);

    List<Product> findByCategoryNameContainingIgnoreCase(String keyword);
}
