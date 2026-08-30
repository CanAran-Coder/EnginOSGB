package org.test.backend.dto.request;

import lombok.Data;


public record LoginRequest(String email,String password) {
}
