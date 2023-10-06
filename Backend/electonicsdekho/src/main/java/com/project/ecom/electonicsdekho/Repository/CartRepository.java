package com.project.ecom.electonicsdekho.Repository;

import com.project.ecom.electonicsdekho.Entity.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends CrudRepository<Cart, Long> {
    public Cart findByUserIdAndProductId(Long userId, Long productId);
    public long countByUserId(Long userId);

    Iterable<Cart> findByUserId(Long userId);
}
