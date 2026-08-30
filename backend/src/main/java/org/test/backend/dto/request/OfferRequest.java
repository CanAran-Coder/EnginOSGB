package org.test.backend.dto.request;

import jakarta.annotation.Nullable;

public record OfferRequest(
        String brandName,
        String ownerName,
        String email,
        String phoneNumber,
        String city,
        String dangerCat,
        String employeeCount,
        String whenStart,

        Boolean osgbService,
        Boolean workplacePhysician,
        Boolean explosionProtectionDocument,
        Boolean ohsSpecialist,
        Boolean ambientMeasurements,
        Boolean mobileHealthVehicle,
        Boolean workplaceNurse,
        Boolean basicOhsTraining,
        Boolean workingAtHeightTraining
) {}