package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.time.LocalDateTime;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Column(nullable = false)
    private String name;

    @Setter
    @Column(columnDefinition = "TEXT")
    private String description;

    @Setter
    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public Project() {}

    public Project(String name, String description, User owner) {
        this.name = name;
        this.description = description;
        this.owner = owner;
        this.createdAt = LocalDateTime.now();
    }


}
