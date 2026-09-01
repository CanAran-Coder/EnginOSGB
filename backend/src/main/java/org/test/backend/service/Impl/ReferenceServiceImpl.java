package org.test.backend.service.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.test.backend.dto.request.ReferenceRequest;
import org.test.backend.dto.response.ReferenceResponse;
import org.test.backend.entity.Reference;
import org.test.backend.repository.ReferenceRepository;
import org.test.backend.service.ReferenceService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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


    public Map<String,String> deleteReference(Long Id){
        referenceRepository.deleteById(Id);
        Map<String,String> response = new HashMap<>();
        response.put("message", "Referans Başarıyla Silindi!");
        return response;
    }

    @Override
    public void saveReference(ReferenceRequest request) {

        Reference reference = new Reference();
        reference.setName(request.brandName());
        reference.setLogo_url(request.logoUrl());
        referenceRepository.save(reference);
    }
}
