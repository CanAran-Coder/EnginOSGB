package org.test.backend.service;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.test.backend.dto.request.TeamMembersRequest;
import org.test.backend.dto.response.TeamMembersResponse;

import java.util.List;
import java.util.Map;

public interface TeamMembersService {
    public List<TeamMembersResponse> getTeamMembers();
    public void deleteMember(Long id);
    public void addMember(@RequestBody TeamMembersRequest request);
}
