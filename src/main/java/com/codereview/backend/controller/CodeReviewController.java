package com.codereview.backend.controller;

import com.codereview.backend.dto.CodeReviewResponse;
import com.codereview.backend.service.CodeReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
public class CodeReviewController {

    private final CodeReviewService codeReviewService;

    @PostMapping("/analyze/{submissionId}")
    public ResponseEntity<CodeReviewResponse> analyzeCode(@PathVariable Integer submissionId) {
        log.info("POST /reviews/analyze/{} - Analyzing code", submissionId);
        CodeReviewResponse review = codeReviewService.analyzeCode(submissionId);
        return ResponseEntity.ok(review);
    }

    @GetMapping("/{submissionId}")
    public ResponseEntity<CodeReviewResponse> getReview(@PathVariable Integer submissionId) {
        log.info("GET /reviews/{} - Fetching review", submissionId);
        CodeReviewResponse review = codeReviewService.getReview(submissionId);
        return ResponseEntity.ok(review);
    }

    @GetMapping("/test")
    public String test() {
        return "Code Review Assistant Backend is Running!";
    }
}