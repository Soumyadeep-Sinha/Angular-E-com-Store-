package com.project.ecom.electonicsdekho.Controllers;

import com.project.ecom.electonicsdekho.Entity.Orders;
import com.project.ecom.electonicsdekho.Services.CartService;
import com.project.ecom.electonicsdekho.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private CartService cartService;

    @CrossOrigin
    @GetMapping("/getOrdersByUserId/{userId}")
    public Iterable<Orders> getAllordersByUserId(@PathVariable Long userId){
        return orderService.getOrdersByUserId(userId);
    }

    @CrossOrigin
    @DeleteMapping("/removeFromCart/{id}")
    public ResponseEntity<String> removeFromCart(@PathVariable Long id){
        String result = String.valueOf(cartService.deleteCartItem(id));
//        System.out.println(result);
        if (result.contains("Success")) {
            return ResponseEntity.ok("Item removed successfully");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error removing item from cart");
        }
    }
}
