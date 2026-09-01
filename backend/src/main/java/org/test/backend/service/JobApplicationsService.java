package org.test.backend.service;

import org.springframework.stereotype.Service;
import org.test.backend.dto.request.JobApplicationsRequest;
import org.test.backend.dto.response.JobApplicationsResponse;
import org.test.backend.entity.JobApplications;

import java.util.List;


public interface JobApplicationsService {

    public JobApplicationsResponse joinTeam(JobApplicationsRequest request);
    public List<JobApplications> getAll();


}
