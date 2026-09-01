package org.test.backend.service;

import org.test.backend.dto.request.ReferenceRequest;
import org.test.backend.dto.response.ReferenceResponse;

import java.util.Map;

public interface ReferenceService {
    public ReferenceResponse getReferences();
    public Map<String,String> deleteReference(Long Id);
    public void saveReference(ReferenceRequest request);
}
