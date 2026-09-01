package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.test.backend.dto.request.JobApplicationsRequest;
import org.test.backend.dto.response.JobApplicationsResponse;
import org.test.backend.entity.JobApplications;
import org.test.backend.service.JobApplicationsService;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/joinUs")
public class JobApplicationsController {
    private final JobApplicationsService jobApplicationsService;

    @PostMapping("/joinTeam")
    public ResponseEntity<JobApplicationsResponse> joinTeam(@RequestBody JobApplicationsRequest jobApplicationsRequest) {
        return ResponseEntity.ok(jobApplicationsService.joinTeam(jobApplicationsRequest));
    }

    @GetMapping("/dashboard/getAll")
    public ResponseEntity<List<JobApplications>> getAllJobApplications() {
        return ResponseEntity.ok(jobApplicationsService.getAll());
    }
    @DeleteMapping("/deleteJoinUs")
    public ResponseEntity<Map<String,String>> deleteJobApplication(@RequestBody Long id) {
        jobApplicationsService.deleteApplication(id);
        return ResponseEntity.ok(Map.of("message", "Başvuru Başarıyla Silindi!"));
    }
}
