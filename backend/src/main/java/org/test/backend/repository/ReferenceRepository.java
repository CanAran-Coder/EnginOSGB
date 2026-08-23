package org.test.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.test.backend.entity.Reference;

@Repository
public interface ReferenceRepository extends JpaRepository<Reference,Long> {
}
