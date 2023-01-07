package com.ecommerce.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.model.User;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    void deleteById(Long id);
    Optional<Product> findById (Long id);
}
