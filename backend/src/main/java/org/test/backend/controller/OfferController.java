package org.test.backend.controller;

import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.SQLRestriction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.test.backend.dto.request.OfferRequest;
import org.test.backend.entity.Offer;
import org.test.backend.service.OfferService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/offer")
@RequiredArgsConstructor
public class OfferController {

    private final OfferService offerService;

    @PostMapping("/addOffer")
    public ResponseEntity<Map<String,String>> addOffer(@RequestBody OfferRequest offerRequest) {
        offerService.addOffer(offerRequest);
        return ResponseEntity.ok(Map.of("message","Teklif Başarıyla Gönderildi"));
    }
    @GetMapping("/dashboard/getProposals")
    public ResponseEntity<List<Offer>> getOffers() {
        return  ResponseEntity.ok(offerService.getOffers());
    }

    @DeleteMapping("/deleteOffer")
    public ResponseEntity<Map<String,String>> deleteOffer(@RequestBody Long offerId) {
            offerService.deleteOffer(offerId);
        return ResponseEntity.ok(Map.of("message","Teklif Başarıyla Silindi!"));
    }
}
