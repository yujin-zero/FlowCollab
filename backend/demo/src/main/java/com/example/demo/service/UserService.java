package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User registerUser(String username, String password, String name) {
        checkUsernameDuplicate(username);

        User user = new User(
            username,
            passwordEncoder.encode(password),
            name,
            LocalDateTime.now(),
            LocalDateTime.now()
        );
        return userRepository.save(user);
    }

    private void checkUsernameDuplicate(String username) {
        if (userRepository.findByUsername(username) != null) {
            throw new IllegalArgumentException("Username already exists");
        }
    }
}
