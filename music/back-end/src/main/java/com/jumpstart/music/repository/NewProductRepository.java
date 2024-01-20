package com.jumpstart.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jumpstart.music.models.NewProduct;

public interface NewProductRepository extends JpaRepository<NewProduct, Long> {
	
}
