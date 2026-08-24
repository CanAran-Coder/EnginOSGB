package org.test.backend.service.Impl;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.test.backend.dto.response.DangerCatResponse;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

@Service
@Slf4j
public class GeminiAIService {

    @Value("${gemini.api.key}")
    private String apiKey;
    private final RestClient restClient = RestClient.builder().build();
    private final ObjectMapper objectMapper = new ObjectMapper();


    public DangerCatResponse analyzeNaceCode(String naceCode){

        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=" + apiKey;
        String promptText = """
               Sen bir İş Sağlığı Ve Güvenliği Uzmanısın.
               Sana verilen NACE kodu:%s
               Lütfen bu NACE kodunu analiz et ve SADECE aşağıdaki JSON formatında yanıt ver.Başka hiçbir açıklama yazma.
               {
                "sector":"Tanım Faaliyet Gösterdiği Sektör",
                "dangerCategory":"Az Tehlikeli | Tehlikeli | Çok Tehlikeli",
                "obligations":["Yasal Zorunluluk 1","Yasal Zorunluluk 2","Yasal Zorunluluk 3"],
                "error":null
               }    
                
               Eğer NACE kodu yanlışsa veya bulamıyorsa
               
               {
                "sector":null,
                "dangerCategory":null,
                "obligations":[],
                "error":"Hatalı NACE Kodu!"
               }
                """.formatted(naceCode);

        String requestBody = """
                {
                  "contents": [{
                    "parts": [{"text": "%s"}]
                  }],
                  "generationConfig": {
                    "responseMimeType": "application/json"
                  }
                }
                """.formatted(promptText.replace("\n", " ").replace("\"", "\\\""));



        try{
            String responseString = restClient.post()
                    .uri(url)
                    .header("Content-Type", "application/json")
                    .body(requestBody)
                    .retrieve()
                    .body(String.class);

            JsonNode rootNode = objectMapper.readTree(responseString);
            String aiJsonOutput = rootNode
                    .path("candidates").get(0)
                    .path("content")
                    .path("parts").get(0)
                    .path("text").asText();
            return objectMapper.readValue(aiJsonOutput, DangerCatResponse.class);
        }
        catch (Exception ex){
            log.error(ex.getMessage(), ex);
            return new DangerCatResponse(null, null, null, "AI Servisi Yanıt Veremedi.");
        }


    }
}
