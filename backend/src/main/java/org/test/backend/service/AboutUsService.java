package org.test.backend.service;

import org.springframework.http.ResponseEntity;
import org.test.backend.dto.request.AboutUsRequest;
import org.test.backend.dto.response.AboutUsResponse;

import java.util.Map;

public interface AboutUsService {
    public  AboutUsResponse getContent();
    public void saveText(AboutUsRequest text);
}
