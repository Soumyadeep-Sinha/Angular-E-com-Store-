package com.project.ecom.electonicsdekho.Repository;

import com.project.ecom.electonicsdekho.Entity.Seller;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends CrudRepository<Seller, Long> {
    Seller findByUsername(String username);
}
