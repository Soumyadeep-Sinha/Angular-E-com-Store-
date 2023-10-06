package com.project.ecom.electonicsdekho.Services;

import com.project.ecom.electonicsdekho.Entity.User;
import com.project.ecom.electonicsdekho.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

    public User validateUser(User user){
        User found = userRepository.findByUsername(user.getUsername());

        if(Objects.equals(found.getPassword(), user.getPassword())){
            return found;
        }else{
            return null;
        }
    }

    public User updateUser(User user){
        User found = userRepository.findByUsername(user.getUsername());

        if(found != null){
            if(!Objects.equals(user.getPassword(), "")){
                found.setPassword(user.getPassword());
            }else{
                found.setPassword(found.getPassword());
            }

            if(!Objects.equals(user.getEmail(), "")){
                found.setEmail(user.getEmail());
            }else{
                found.setEmail(found.getEmail());
            }

            return userRepository.save(found);
        }else{
            return null;
        }
    }


}
