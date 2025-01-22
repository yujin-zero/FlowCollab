package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserResponseDto {
    private String username;
    private String name;

    public UserResponseDto(String username, String name) {
        this.username = username;
        this.name = name;
    }
}
