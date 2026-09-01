package org.test.backend.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.test.backend.dto.request.AboutUsRequest;
import org.test.backend.dto.response.AboutUsResponse;
import org.test.backend.service.AboutUsService;
import org.test.backend.service.Impl.AboutUsServiceImpl;

import java.util.Map;

@RestController
@RequestMapping("/api/aboutUs")
@RequiredArgsConstructor
public class AboutUsController {
    private final AboutUsService aboutUsService;
    @GetMapping("/getContent")
    public ResponseEntity<AboutUsResponse> getContent() {

        return  ResponseEntity.ok(aboutUsService.getContent());
    }

    @PostMapping("/dashboard/save")
    public ResponseEntity saveText(@RequestBody AboutUsRequest text){
        aboutUsService.saveText(text);
        return ResponseEntity.ok().build();
    }

}
