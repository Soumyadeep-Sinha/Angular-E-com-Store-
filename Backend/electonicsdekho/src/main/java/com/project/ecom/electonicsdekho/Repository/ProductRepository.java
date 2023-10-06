package com.project.ecom.electonicsdekho.Repository;

import com.project.ecom.electonicsdekho.Entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
    public Iterable<Product> findByCategoryId(long categoryId);

    Iterable<Product> findBySellerId(Long sellerId);
}
