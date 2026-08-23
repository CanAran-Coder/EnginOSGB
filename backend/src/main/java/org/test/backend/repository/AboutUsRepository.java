package org.test.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.test.backend.entity.AboutUs;

import java.util.Optional;

@Repository
public interface AboutUsRepository extends JpaRepository<AboutUs, Integer> {

    public Optional<AboutUs> findFirstByOrderByIdAsc();
}
