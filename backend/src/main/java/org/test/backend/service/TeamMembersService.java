package org.test.backend.service;

import org.springframework.http.ResponseEntity;
import org.test.backend.dto.response.TeamMembersResponse;

import java.util.List;
import java.util.Map;

public interface TeamMembersService {
    public List<TeamMembersResponse> getTeamMembers();
    public void deleteMember(Long id);
}
