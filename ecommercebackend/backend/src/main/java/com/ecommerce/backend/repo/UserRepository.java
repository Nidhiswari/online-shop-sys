package com.ecommerce.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.backend.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    void deleteById(Long id);

    User findByUsername (String username);
    Optional<User> findById (Long id);
}
