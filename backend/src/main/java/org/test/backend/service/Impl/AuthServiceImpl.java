package org.test.backend.service.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.test.backend.Enums.SuccessStates;
import org.test.backend.dto.request.LoginRequest;
import org.test.backend.dto.request.RegisterRequest;
import org.test.backend.dto.response.AuthResponse;
import org.test.backend.entity.User;
import org.test.backend.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;


    public AuthResponse register(RegisterRequest registerRequest) {
        if(userRepository.existsByEmail(registerRequest.email())){
            throw new RuntimeException("Bu e-posta adresi zaten kullanımda!");

        }

        User user = new User();
        user.setEmail(registerRequest.email());
        user.setPassword(passwordEncoder.encode(registerRequest.password()));
        user.setRole(registerRequest.role());
        user.setTitle(registerRequest.title());
        user.setFullName(registerRequest.fullName());
        user.setPhoneNumber(registerRequest.phoneNumber());
        user.setIsActive(true);

        userRepository.save(user);
        AuthResponse response = new AuthResponse(SuccessStates.SUCCESS,"Kullanıcı başarıyla kaydedildi!");
        return response;
    }

    public HttpHeaders login(LoginRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BadCredentialsException("E-posta veya şifre hatalı."));

        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new BadCredentialsException("E-posta veya şifre hatalı.");
        }

        String jwt = jwtService.generateToken(user.getEmail(), user.getRole());

        ResponseCookie cookie = ResponseCookie.from("accessToken", jwt)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(24 * 60 * 60)
                .sameSite("Lax")
                .build();

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.SET_COOKIE, cookie.toString());
        return headers;
    }



}
