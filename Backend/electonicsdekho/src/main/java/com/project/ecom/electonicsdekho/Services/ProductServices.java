package com.project.ecom.electonicsdekho.Services;

import com.project.ecom.electonicsdekho.Entity.Product;
import com.project.ecom.electonicsdekho.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductServices {
    @Autowired
    private ProductRepository productRepository;

    public Iterable<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Iterable<Product> getByCategoryId(Long id){
        return productRepository.findByCategoryId(id);
    }

    public Product getProductById(Long id){
        return productRepository.findById(id).orElse(null);
    }

    public Iterable<Product> getProdctBySellerId(Long sellerId){
        return productRepository.findBySellerId(sellerId);
    }
}
