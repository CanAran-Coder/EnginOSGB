package org.test.backend.dto.response;

import org.test.backend.Enums.SuccessStates;

public record AuthResponse(SuccessStates success, String message) {
}
