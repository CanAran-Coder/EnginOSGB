package org.test.backend.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.test.backend.dto.response.AboutUsResponse;
import org.test.backend.service.Impl.AboutUsServiceImpl;

@RestController
@RequestMapping("/api/aboutUs")
@RequiredArgsConstructor
public class AboutUsController {
    private final AboutUsServiceImpl aboutUsService;
    @GetMapping("/getContent")
    public ResponseEntity<AboutUsResponse> getContent() {

        return ResponseEntity.ok(aboutUsService.getContent());

    }

}
