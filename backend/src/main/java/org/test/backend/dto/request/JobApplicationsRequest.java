package org.test.backend.dto.request;

import lombok.Data;


public record JobApplicationsRequest(String fullName,String email,String phone,String city,String expertise,String certificate,String experience,String cvUrl) {
}
