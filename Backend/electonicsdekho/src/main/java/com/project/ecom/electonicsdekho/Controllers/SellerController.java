package com.project.ecom.electonicsdekho.Controllers;

import com.project.ecom.electonicsdekho.Entity.Category;
import com.project.ecom.electonicsdekho.Entity.Product;
import com.project.ecom.electonicsdekho.Entity.Seller;
import com.project.ecom.electonicsdekho.Services.CategoryServices;
import com.project.ecom.electonicsdekho.Services.SellerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/seller")
public class SellerController {
    @Autowired
    private SellerServices sellerServices;

    @Autowired
    private CategoryServices categoryServices;

    @CrossOrigin
    @PostMapping("/saveSellerData")
    public ResponseEntity<Seller> saveSellerData(@RequestBody Seller seller){
        return new ResponseEntity<>(sellerServices.saveSellerData(seller), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/SellerValidate")
    public ResponseEntity<Seller> isSellerValid(@RequestBody Seller seller){
        return new ResponseEntity<>(sellerServices.validateSeller(seller), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/addCategory")
    public Category addCategory(@RequestBody Category category){
        return categoryServices.createCategory(category);
    }

    @CrossOrigin
    @GetMapping("/getAllCategories")
    public Iterable<Category> getAllCategory(){
        return categoryServices.getAllCategories();
    }


    @CrossOrigin
    @PostMapping("/addProduct")
    public Product addproduct(@RequestBody Product product){
        return sellerServices.createProduct(product);
    }
}
