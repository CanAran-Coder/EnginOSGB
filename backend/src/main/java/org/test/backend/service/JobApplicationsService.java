package org.test.backend.service;

import org.springframework.stereotype.Service;
import org.test.backend.dto.request.JobApplicationsRequest;
import org.test.backend.dto.response.JobApplicationsResponse;


public interface JobApplicationsService {

    public JobApplicationsResponse joinTeam(JobApplicationsRequest request);


}
