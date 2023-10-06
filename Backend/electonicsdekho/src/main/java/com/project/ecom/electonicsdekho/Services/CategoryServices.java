package com.project.ecom.electonicsdekho.Services;

import com.project.ecom.electonicsdekho.Entity.Category;
import com.project.ecom.electonicsdekho.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServices {
    @Autowired
    private CategoryRepository categoryRepository;

    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }

    public Iterable<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
}
