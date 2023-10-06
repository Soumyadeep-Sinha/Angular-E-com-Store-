package com.project.ecom.electonicsdekho.Controllers;

import com.project.ecom.electonicsdekho.Entity.User;
import com.project.ecom.electonicsdekho.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserServices userServices;

    @CrossOrigin
    @PostMapping("/saveUser")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return new ResponseEntity<>(userServices.createUser(user), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/validateUser")
    public ResponseEntity<User> validateUser(@RequestBody User user){
        return new ResponseEntity<>(userServices.validateUser(user), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/updateUser")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<>(userServices.updateUser(user), HttpStatus.OK);
    }
}
