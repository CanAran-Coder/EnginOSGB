package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.test.backend.dto.request.DangerCatRequest;
import org.test.backend.dto.response.DangerCatResponse;
import org.test.backend.service.DangerCatService;
import org.test.backend.service.Impl.GeminiAIService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/dangerCat")
public class DangerCatController {
    private final GeminiAIService geminiAIService;
    @PostMapping("/askAI")
    public ResponseEntity<DangerCatResponse> AskAI(@RequestBody DangerCatRequest request) {

        return ResponseEntity.ok(geminiAIService.analyzeNaceCode(request.naceCode()));

    }


}
