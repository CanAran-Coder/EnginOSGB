package org.test.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

@Entity
@Getter
@Setter
@SQLRestriction("is_deleted = false")
@SQLDelete(sql="UPDATE job_applications set is_deleted = true where id = ?")
public class JobApplications extends SoftDeleteEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String fullName;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String phone;
    @Column(nullable = false)
    private String city;
    @Column(nullable = false)
    private String expertise;
    @Column(nullable = false)
    private String certificate;
    @Column(nullable = false)
    private String experience;
    @Column(nullable = false)
    private String cvUrl;
}
