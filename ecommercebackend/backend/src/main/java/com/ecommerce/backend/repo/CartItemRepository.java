package com.ecommerce.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.ecommerce.backend.model.cart.CartItem;
import com.ecommerce.backend.model.cart.CartItemPK;

public interface CartItemRepository extends JpaRepository <CartItem, CartItemPK> {
}
