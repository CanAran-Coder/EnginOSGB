package org.test.backend.dto.response;

import java.util.List;

public record OfferResponse(
        String brandName,
        String ownerName,
        String phoneNumber,
        String city,
        String dangerCat,
        String employeeCount,
        String whenStart,
        List<String> selections
) {
}
