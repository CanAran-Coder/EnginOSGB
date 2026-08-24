package org.test.backend.service;

import org.test.backend.dto.response.TeamMembersResponse;

import java.util.List;

public interface TeamMembersService {
    public List<TeamMembersResponse> getTeamMembers();
}
