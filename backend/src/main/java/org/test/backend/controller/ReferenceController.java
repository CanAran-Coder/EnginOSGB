package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.test.backend.dto.response.ReferenceResponse;
import org.test.backend.service.ReferenceService;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reference")
public class ReferenceController {
    private final ReferenceService referenceService;

    @GetMapping("/getReferences")
    public ResponseEntity<ReferenceResponse> getReferences(){

        return ResponseEntity.ok(referenceService.getReferences());

    }

}
