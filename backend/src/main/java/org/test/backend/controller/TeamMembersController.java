package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.test.backend.dto.response.TeamMembersResponse;
import org.test.backend.service.TeamMembersService;

import java.util.List;

@RestController
@RequestMapping("/api/teamMembers")
@RequiredArgsConstructor

public class TeamMembersController {
    private final TeamMembersService teamMembersService;

    @GetMapping("/getMembers")
    public ResponseEntity<List<TeamMembersResponse>> getTeamMembers() {
        return ResponseEntity.ok(teamMembersService.getTeamMembers());
    }

}
