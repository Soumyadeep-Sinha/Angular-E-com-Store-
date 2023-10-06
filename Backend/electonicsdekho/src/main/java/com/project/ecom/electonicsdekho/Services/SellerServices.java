package com.project.ecom.electonicsdekho.Services;

import com.project.ecom.electonicsdekho.Entity.Product;
import com.project.ecom.electonicsdekho.Entity.Seller;
import com.project.ecom.electonicsdekho.Repository.ProductRepository;
import com.project.ecom.electonicsdekho.Repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class SellerServices {
    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private ProductRepository productRepository;


    public Seller saveSellerData(Seller seller){
        return sellerRepository.save(seller);
    }

    public Seller validateSeller(Seller seller){
        Seller found = sellerRepository.findByUsername(seller.getUsername());
        if(Objects.equals(found.getPassword(), seller.getPassword())){
            return found;
        }else{
            return null;
        }
    }


    public Product createProduct(Product product){
        return productRepository.save(product);
    }
}

