package org.test.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

@Entity
@Getter
@Setter
@SQLDelete(sql="UPDATE offer set is_deleted = true where id=?")
@SQLRestriction("is_deleted = false")
public class Offer extends SoftDeleteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "brand_name", nullable = false)
    private String brandName;

    @Column(name = "owner_name", nullable = false)
    private String ownerName;
    private String email;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "city")
    private String city;

    @Column(name = "danger_cat")
    private String dangerCat;

    @Column(name = "employee_count")
    private String employeeCount;

    @Column(name = "when_start")
    private String whenStart;

    @Column(name = "osgb_service", nullable = false)
    private Boolean osgbService = false;

    @Column(name = "workplace_physician", nullable = false)
    private Boolean workplacePhysician = false;

    @Column(name = "explosion_protection_document", nullable = false)
    private Boolean explosionProtectionDocument = false;

    @Column(name = "ohs_specialist", nullable = false)
    private Boolean ohsSpecialist = false;

    @Column(name = "ambient_measurements", nullable = false)
    private Boolean ambientMeasurements = false;

    @Column(name = "mobile_health_vehicle", nullable = false)
    private Boolean mobileHealthVehicle = false;

    @Column(name = "workplace_nurse", nullable = false)
    private Boolean workplaceNurse = false;

    @Column(name = "basic_ohs_training", nullable = false)
    private Boolean basicOhsTraining = false;

    @Column(name = "working_at_height_training", nullable = false)
    private Boolean workingAtHeightTraining = false;
}