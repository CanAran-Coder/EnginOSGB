package org.test.backend.service.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.test.backend.dto.response.AboutUsResponse;
import org.test.backend.repository.AboutUsRepository;
import org.test.backend.service.AboutUsService;

@Service
@RequiredArgsConstructor
public class AboutUsServiceImpl implements AboutUsService {
    private final AboutUsRepository aboutUsRepository;


    public AboutUsResponse getContent() {

        return aboutUsRepository.findFirstByOrderByIdAsc()
                .map(aboutUs -> new AboutUsResponse(aboutUs.getContent()))
                .orElseThrow(()-> new RuntimeException("Content not found!"));


    }



}
