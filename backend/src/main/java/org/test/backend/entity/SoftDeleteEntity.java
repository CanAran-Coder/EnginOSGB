package org.test.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class SoftDeleteEntity extends BaseEntity {
    @Column(name = "is_deleted",nullable = false)
    private boolean isDeleted=false;
}
