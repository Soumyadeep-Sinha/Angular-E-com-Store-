package com.project.ecom.electonicsdekho.Repository;

import com.project.ecom.electonicsdekho.Entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    public User findByUsername(String username);
}
