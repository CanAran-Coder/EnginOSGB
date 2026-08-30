package org.test.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.test.backend.entity.JobApplications;

@Repository
public interface JobApplicationsRepository extends JpaRepository<JobApplications,Long> {
}
