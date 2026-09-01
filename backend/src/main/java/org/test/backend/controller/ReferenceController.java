package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.test.backend.dto.request.ReferenceRequest;
import org.test.backend.dto.response.ReferenceResponse;
import org.test.backend.service.ReferenceService;

import java.util.Map;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reference")
public class ReferenceController {
    private final ReferenceService referenceService;

    @GetMapping("/getReferences")
    public ResponseEntity<ReferenceResponse> getReferences(){

        return ResponseEntity.ok(referenceService.getReferences());

    }

    @DeleteMapping
    public ResponseEntity<Map<String,String>> deleteReferences(@RequestBody Long Id){

        return ResponseEntity.ok(referenceService.deleteReference(Id));
    }


    @PostMapping("/saveReference")
    public ResponseEntity<Map<String,String>> saveReference(@RequestBody ReferenceRequest request){

        referenceService.saveReference(request);
        return ResponseEntity.ok(Map.of("message","Referans Başarıyla Eklendi!"));
    }
}
