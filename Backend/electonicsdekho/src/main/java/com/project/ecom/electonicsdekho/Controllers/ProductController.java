package com.project.ecom.electonicsdekho.Controllers;

import com.project.ecom.electonicsdekho.Entity.Cart;
import com.project.ecom.electonicsdekho.Entity.CheckoutRequest;
import com.project.ecom.electonicsdekho.Entity.Orders;
import com.project.ecom.electonicsdekho.Entity.Product;
import com.project.ecom.electonicsdekho.Services.CartService;
import com.project.ecom.electonicsdekho.Services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    @Autowired
    private ProductServices productServices;
    @Autowired
    private CartService cartService;

    @CrossOrigin
    @GetMapping("/getAllProducts")
    public Iterable<Product> getAllProduct(){
        return productServices.getAllProducts();
    }
    @CrossOrigin
    @GetMapping("/getProductByCategoryId/{categoryId}")
    public Iterable<Product> getProductByCategory(@PathVariable Long categoryId){
        return productServices.getByCategoryId(categoryId);
    }

    @CrossOrigin
    @GetMapping("/getProductById/{id}")
    public Product getProductById(@PathVariable Long id){
        return productServices.getProductById(id);
    }

    @CrossOrigin
    @PostMapping("/addToCart")
    public Cart addTocart(@RequestBody Cart cart){
        return cartService.addToCart(cart);
    }

    @CrossOrigin
    @GetMapping("/getCartSize/{userId}")
    public long geCartSize(@PathVariable Long userId){
        return cartService.countTotalItemsInCart(userId);
    }

    @CrossOrigin
    @GetMapping("/getCart/{userId}")
    public Iterable<Cart> getCartItems(@PathVariable Long userId){
        return cartService.getCartProducts(userId);
    }

    @CrossOrigin
    @GetMapping("/getAllCarts")
    public Iterable<Cart> getAllCarts(){
        return cartService.getAllCartProducts();
    }

    @CrossOrigin
    @PostMapping("/checkout")
    public Iterable<Orders> checkout(@RequestBody CheckoutRequest checkoutRequest) {
        Long userId = checkoutRequest.getUserId();
        String shippingAddress = checkoutRequest.getShippingAddress();
        String pinCode = checkoutRequest.getPinCode();

        return cartService.checkout(userId, shippingAddress, pinCode);
    }

    @CrossOrigin
    @GetMapping("/GetProductsBySellerId/{id}")
    public Iterable<Product> getProductBysellerId(@PathVariable Long id){
        return productServices.getProdctBySellerId(id);
    }

}
