package org.test.backend.service.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.test.backend.Enums.SuccessStates;
import org.test.backend.dto.request.JobApplicationsRequest;
import org.test.backend.dto.response.JobApplicationsResponse;
import org.test.backend.entity.JobApplications;
import org.test.backend.repository.JobApplicationsRepository;
import org.test.backend.service.JobApplicationsService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobApplicationsServiceImpl implements JobApplicationsService {
    private final JobApplicationsRepository jobApplicationsRepository;
    @Override
    public JobApplicationsResponse joinTeam(JobApplicationsRequest request) {
        JobApplications jobApplications = new JobApplications();
        BeanUtils.copyProperties(request,jobApplications);
        JobApplications result = jobApplicationsRepository.save(jobApplications);

        return new JobApplicationsResponse(SuccessStates.SUCCESS);
    }

    @Override
    public List<JobApplications> getAll() {
        return jobApplicationsRepository.findAll();
    }

    @Override
    public void deleteApplication(Long id) {
        jobApplicationsRepository.deleteById(id);
    }


}
