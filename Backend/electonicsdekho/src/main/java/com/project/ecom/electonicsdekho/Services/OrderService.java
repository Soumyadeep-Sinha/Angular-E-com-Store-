package com.project.ecom.electonicsdekho.Services;

import com.project.ecom.electonicsdekho.Entity.Orders;
import com.project.ecom.electonicsdekho.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Orders createOrder(Orders order){
        return orderRepository.save(order);
    }

    public Iterable<Orders> getOrdersByUserId(Long userId){
        return orderRepository.findByUserId(userId);
    }
}
