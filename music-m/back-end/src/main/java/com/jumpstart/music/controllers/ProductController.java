package com.jumpstart.music.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jumpstart.music.models.NewProduct;
import com.jumpstart.music.models.Product;
import com.jumpstart.music.repository.NewProductRepository;
import com.jumpstart.music.repository.ProductRepository;

//@CrossOrigin("http://localhost:8081")
@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private NewProductRepository newProductRepository;
	
	@GetMapping("/all")
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	
	@GetMapping("/featured")
	public List<Product> getSixRandomProducts() {
		List<Product> products = productRepository.findAll();
		List<Product> randomProducts = new ArrayList<>();
		
		int numProducts = 6;
		int totalProducts = products.size();
		
		List<Integer> indices = new ArrayList<>();
		for(int i = 0; i < totalProducts; i++) {
			indices.add(i);
		}
		Collections.shuffle(indices);
		
		for(int i = 0; i < numProducts && i < totalProducts; i++) {
			int index = indices.get(i);
			randomProducts.add(products.get(index));
		}
		
		return randomProducts;
	}
	
	@GetMapping
	public List<Product> searchProducts(@RequestParam("keyword") String keyword) {
		List<Product> products = new ArrayList<>();
		
		// Some products somehow are displayed more than once
		
		if(keyword == null || keyword.isEmpty()) {
			products.addAll(productRepository.findAll());
		} else {
			products.addAll(productRepository.findByNameContainingIgnoreCase(keyword));
			products.addAll(productRepository.findByCategoryNameContainingIgnoreCase(keyword));
			products.addAll(productRepository.findByBrandNameContainingIgnoreCase(keyword));
		}
		
		return products;
	}
	
	@GetMapping("/new")
	public List<NewProduct> newProducts() {
		List<NewProduct> newProducts = newProductRepository.findAll();
		List<NewProduct> randomProducts = new ArrayList<>();
		
		// To random selected products
		int numProducts = 6;
		int totalProducts = newProducts.size();
		
		// Generate random indices
		List<Integer> indices = new ArrayList<>();
		for(int i = 0; i < totalProducts; i++) {
			indices.add(i);
		}
		Collections.shuffle(indices);
		
		// Select random products
		for(int i = 0; i < numProducts && i < totalProducts; i++) {
			int index = indices.get(i);
			randomProducts.add(newProducts.get(index));
		}
		
		return randomProducts;
	}
}
