package com.codereview.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class OpenAIService {

    @Value("${openai.api.key}")
    private String apiKey;

    @Value("${openai.api.url}")
    private String apiUrl;

    @Value("${openai.model}")
    private String model;

    public String analyzeCode(String codeContent, String language, String title) {

        return """
                Code Review Report

                Overall Score: 85/100

                Good:
                - Code is readable.
                - Proper formatting.

                Improvements:
                - Add comments.
                - Improve variable names.
                - Handle exceptions.
                """;
    }
}