package org.test.backend.service.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.test.backend.dto.response.ReferenceResponse;
import org.test.backend.entity.Reference;
import org.test.backend.repository.ReferenceRepository;
import org.test.backend.service.ReferenceService;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ReferenceServiceImpl implements ReferenceService {
    private final ReferenceRepository referenceRepository;
    @Override
    public ReferenceResponse getReferences() {
        List<Reference> references = referenceRepository.findAll();
        ReferenceResponse response = new ReferenceResponse(references);
        return response;
    }
}
