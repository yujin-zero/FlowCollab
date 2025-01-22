package com.example.demo.service;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserServiceTest {

    private final UserRepository userRepository = Mockito.mock(UserRepository.class);
    private final PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
    private final UserService userService = new UserService(userRepository,passwordEncoder);

    @Test
    @DisplayName("회원가입 성공")
    void testRegisterUserSuccess() {
        // given
        String rawPassword = "password123";
        String encodedPassword = "encodedPassword";
        String username = "testuser";
        String name = "Test User";

        when(userRepository.findByUsername(username)).thenReturn(null);
        when(passwordEncoder.encode(rawPassword)).thenReturn(encodedPassword);
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // when
        User user = userService.registerUser(username, rawPassword, name);

        // then
        assertThat(user).isNotNull();
        assertThat(user.getUsername()).isEqualTo(username);
        verify(userRepository, times(1)).save(any(User.class));

    }

    @Test
    @DisplayName("username 중복 검사")
    void testRegisterUserDuplicateUsername() {
        String username = "testuser";

        when(userRepository.findByUsername(username)).thenReturn(new User());

        IllegalArgumentException exception = assertThrows(
                IllegalArgumentException.class,
                () -> userService.registerUser(username, "password123","Test User")
        );
        assertThat(exception.getMessage()).isEqualTo("Username already exists");
        verify(userRepository, never()).save(any(User.class));
    }
}
