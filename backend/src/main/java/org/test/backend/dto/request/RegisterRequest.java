package org.test.backend.dto.request;

import org.test.backend.Enums.Roles;
import org.test.backend.Enums.Titles;

 public record RegisterRequest(String email, String password, Roles role, String fullName, Titles title, String phoneNumber) {
}
