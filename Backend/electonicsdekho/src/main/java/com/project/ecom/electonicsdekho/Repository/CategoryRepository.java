package com.project.ecom.electonicsdekho.Repository;

import com.project.ecom.electonicsdekho.Entity.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
}
