package org.test.backend.service;

import org.test.backend.dto.response.DangerCatResponse;

public interface DangerCatService {
    public DangerCatResponse AskAI(String naceCode);
}
