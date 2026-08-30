package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.test.backend.dto.request.JobApplicationsRequest;
import org.test.backend.dto.response.JobApplicationsResponse;
import org.test.backend.service.JobApplicationsService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/joinUs")
public class JobApplicationsController {
    private final JobApplicationsService jobApplicationsService;

    @PostMapping("/joinTeam")
    public ResponseEntity<JobApplicationsResponse> joinTeam(@RequestBody JobApplicationsRequest jobApplicationsRequest) {
        return ResponseEntity.ok(jobApplicationsService.joinTeam(jobApplicationsRequest));
    }

}
