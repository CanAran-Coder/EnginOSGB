package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.test.backend.Enums.SuccessStates;
import org.test.backend.dto.request.LoginRequest;
import org.test.backend.dto.request.RegisterRequest;
import org.test.backend.dto.response.AuthResponse;
import org.test.backend.service.Impl.AuthServiceImpl;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/yetkili")
@RequiredArgsConstructor
public class AuthController {

    private final AuthServiceImpl authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
       AuthResponse message = authService.register(request);
        return ResponseEntity.ok(message);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest request) {
        HttpHeaders headers = authService.login(request);
        return ResponseEntity.ok()
                .headers(headers)
                .body(Map.of("message", "Giriş başarılı!"));
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {

        org.springframework.http.ResponseCookie cookie = org.springframework.http.ResponseCookie.from("accessToken", "")
                .httpOnly(true)
                .path("/")
                .maxAge(0)
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .build();
    }

}
