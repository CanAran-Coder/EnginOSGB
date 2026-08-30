package org.test.backend.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.test.backend.service.Impl.JwtService;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        String token = null;


        if(request.getCookies() != null){
            for(Cookie cookie : request.getCookies()){
                if("accessToken".equals(cookie.getName())){
                    token = cookie.getValue();
                    break;
                }
            }
        }


        if(token != null && jwtService.isTokenValid(token) ){
            String email = jwtService.extractEmail(token);
            String role =  jwtService.extractRole(token);
            var authority = new SimpleGrantedAuthority(role);
            var authentication = new UsernamePasswordAuthenticationToken(email, null, List.of(authority));

            SecurityContextHolder.getContext().setAuthentication(authentication);

        }

        filterChain.doFilter(request, response);
    }

}
