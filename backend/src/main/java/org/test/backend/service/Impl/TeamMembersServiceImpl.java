package org.test.backend.service.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.test.backend.dto.response.TeamMembersResponse;
import org.test.backend.repository.TeamMembersRepository;
import org.test.backend.service.TeamMembersService;

import java.util.List;
@Service
@RequiredArgsConstructor
public class TeamMembersServiceImpl implements TeamMembersService {
    private final TeamMembersRepository teamMembersRepository;
    @Override
    public List<TeamMembersResponse> getTeamMembers() {
        return teamMembersRepository.findAllByOrderByDisplayOrderAsc();
    }
}
