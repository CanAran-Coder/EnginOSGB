package org.test.backend.service.Impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.test.backend.dto.request.OfferRequest;
import org.test.backend.dto.response.OfferResponse;
import org.test.backend.entity.Offer;
import org.test.backend.repository.OfferRepository;
import org.test.backend.service.OfferService;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OfferServiceImpl implements OfferService {

    private final OfferRepository offerRepository;
    @Override
    public void addOffer(OfferRequest offerRequest) {

        Offer offer = new Offer();
        offer.setCity(offerRequest.city());
        offer.setBrandName(offerRequest.brandName());
        offer.setOwnerName(offerRequest.ownerName());
        offer.setPhoneNumber(offerRequest.phoneNumber());
        offer.setWhenStart(offerRequest.whenStart());
        offer.setOsgbService(offerRequest.osgbService());
        offer.setExplosionProtectionDocument(offerRequest.explosionProtectionDocument());
        offer.setWorkplacePhysician(offerRequest.workplacePhysician());
        offer.setWorkplaceNurse(offerRequest.workplaceNurse());
        offer.setOhsSpecialist(offerRequest.ohsSpecialist());
        offer.setAmbientMeasurements(offerRequest.ambientMeasurements());
        offer.setBasicOhsTraining(offerRequest.basicOhsTraining());
        offer.setDangerCat(offerRequest.dangerCat());
        offer.setMobileHealthVehicle(offerRequest.mobileHealthVehicle());
        offer.setWorkingAtHeightTraining(offerRequest.workingAtHeightTraining());
        offer.setEmployeeCount(offerRequest.employeeCount());
        offer.setEmail(offerRequest.email());


        offerRepository.save(offer);
        log.info("Added offer with id {}", offer.getId());

    }

    @Override
    public List<Offer> getOffers() {
        return offerRepository.findAll();
    }

    @Override
    public void deleteOffer(Long offerId) {
        offerRepository.deleteById(offerId);
    }
}
