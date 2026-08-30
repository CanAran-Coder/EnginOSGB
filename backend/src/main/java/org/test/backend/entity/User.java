package org.test.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.test.backend.Enums.Roles;
import org.test.backend.Enums.Titles;


@Table(name = "users")
@Entity
@Getter
@Setter
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Titles title;
    @Enumerated(EnumType.STRING)
    private Roles role;
    private String phoneNumber;
    private String fullName;
    private Boolean isActive = true;
}
