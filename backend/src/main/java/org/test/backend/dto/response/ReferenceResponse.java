package org.test.backend.dto.response;

import org.test.backend.entity.Reference;

import java.util.List;

public record ReferenceResponse(List<Reference> references) {
}
