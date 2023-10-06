package com.project.ecom.electonicsdekho.Repository;

import com.project.ecom.electonicsdekho.Entity.Orders;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Orders, Long> {
    Iterable<Orders> findByUserId(Long userId);
}
