package org.test.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.test.backend.dto.response.TeamMembersResponse;
import org.test.backend.entity.team_members;

import java.util.List;

@Repository
public interface TeamMembersRepository extends JpaRepository<team_members, Long> {
    @Query("SELECT new org.test.backend.dto.response.TeamMembersResponse(t.id, t.title, t.photoUrl, t.fullName) " +
            "FROM team_members t ORDER BY t.displayOrder ASC")
    List<TeamMembersResponse> findAllByOrderByDisplayOrderAsc();
}
