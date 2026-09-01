package org.test.backend.service.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.test.backend.dto.request.TeamMembersRequest;
import org.test.backend.dto.response.TeamMembersResponse;
import org.test.backend.entity.team_members;
import org.test.backend.repository.TeamMembersRepository;
import org.test.backend.service.TeamMembersService;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class TeamMembersServiceImpl implements TeamMembersService {
    private final TeamMembersRepository teamMembersRepository;
    @Override
    public List<TeamMembersResponse> getTeamMembers() {
        return teamMembersRepository.findAllByOrderByDisplayOrderAsc();
    }

    @Override
    public void deleteMember(Long id) {
        teamMembersRepository.deleteById(id);

    }

    @Override
    public void addMember(TeamMembersRequest request) {
        team_members member = new team_members();
        member.setDisplayOrder(request.displayOrder());
        member.setTitle(request.title());
        member.setFullName(request.full_name());
        member.setPhotoUrl(request.photo_url());
         teamMembersRepository.save(member);
    }
}
