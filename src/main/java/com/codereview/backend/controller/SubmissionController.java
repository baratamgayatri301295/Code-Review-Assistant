package com.codereview.backend.controller;

import com.codereview.backend.dto.CreateSubmissionRequest;
import com.codereview.backend.entity.CodeSubmission;
import com.codereview.backend.service.CodeReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/submissions")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
public class SubmissionController {

    private final CodeReviewService codeReviewService;

    @PostMapping
    public ResponseEntity<CodeSubmission> createSubmission(@RequestBody CreateSubmissionRequest request) {
        log.info("POST /submissions - Creating new submission");
        CodeSubmission submission = codeReviewService.createSubmission(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(submission);
    }

    @GetMapping("/{submissionId}")
    public ResponseEntity<CodeSubmission> getSubmission(@PathVariable Integer submissionId) {
        log.info("GET /submissions/{} - Fetching submission", submissionId);
        CodeSubmission submission = codeReviewService.getSubmission(submissionId);
        return ResponseEntity.ok(submission);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CodeSubmission>> getUserSubmissions(@PathVariable Integer userId) {
        log.info("GET /submissions/user/{} - Fetching user submissions", userId);
        List<CodeSubmission> submissions = codeReviewService.getUserSubmissions(userId);
        return ResponseEntity.ok(submissions);
    }
}