package org.test.backend.dto.response;

import java.util.List;

public record DangerCatResponse(String sector, String dangerCategory, List<String> obligations, String error) {
}
