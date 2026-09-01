package org.test.backend.service;

import org.test.backend.dto.request.OfferRequest;
import org.test.backend.dto.response.OfferResponse;
import org.test.backend.entity.Offer;

import java.util.List;

public interface OfferService {

    void addOffer(OfferRequest offerRequest);
    List<Offer> getOffers();
    public void deleteOffer(Long offerId);

}
