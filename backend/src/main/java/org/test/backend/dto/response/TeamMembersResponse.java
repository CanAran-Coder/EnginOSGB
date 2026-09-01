package org.test.backend.dto.response;

public record TeamMembersResponse(Long id,String title,String photo_url,String full_name,Integer displayOrder) {
}
