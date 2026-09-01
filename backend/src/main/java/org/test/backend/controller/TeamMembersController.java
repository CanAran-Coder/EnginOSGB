package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.test.backend.dto.request.TeamMembersRequest;
import org.test.backend.dto.response.TeamMembersResponse;
import org.test.backend.service.TeamMembersService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/teamMembers")
@RequiredArgsConstructor

public class TeamMembersController {
    private final TeamMembersService teamMembersService;

    @GetMapping("/getMembers")
    public ResponseEntity<List<TeamMembersResponse>> getTeamMembers() {
        return ResponseEntity.ok(teamMembersService.getTeamMembers());
    }
    @DeleteMapping("/deleteMember")
    public ResponseEntity<Map<String,String>> deleteMember(@RequestBody Long id){
        teamMembersService.deleteMember(id);
        return ResponseEntity.ok(Map.of("message","Silme İşlemi Başarılı!"));
    }

    @PostMapping("/addMember")
    public ResponseEntity<Map<String,String>> addMember(@RequestBody TeamMembersRequest request){

        teamMembersService.addMember(request);
        return ResponseEntity.ok(Map.of("message","Kişi Başarıyla Eklendi!"));
    }

}
