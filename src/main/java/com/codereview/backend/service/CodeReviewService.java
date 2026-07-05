package com.codereview.backend.service;

import com.codereview.backend.dto.CodeReviewResponse;
import com.codereview.backend.dto.CreateSubmissionRequest;
import com.codereview.backend.entity.CodeReview;
import com.codereview.backend.entity.CodeSubmission;
import com.codereview.backend.repository.CodeReviewRepository;
import com.codereview.backend.repository.CodeSubmissionRepository;
import com.codereview.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CodeReviewService {

    private final UserRepository userRepository;
    private final CodeSubmissionRepository submissionRepository;
    private final CodeReviewRepository reviewRepository;
    private final OpenAIService openAIService;

    public CodeSubmission createSubmission(CreateSubmissionRequest request) {

        CodeSubmission submission = CodeSubmission.builder()
                .userId(request.getUserId())
                .title(request.getTitle())
                .codeContent(request.getCodeContent())
                .language(request.getLanguage())
                .description(request.getDescription())
                .build();

        return submissionRepository.save(submission);
    }

    public CodeSubmission getSubmission(Integer submissionId) {
        return submissionRepository.findById(submissionId)
                .orElseThrow(() -> new RuntimeException("Submission not found"));
    }

    public List<CodeSubmission> getUserSubmissions(Integer userId) {
        return submissionRepository.findByUserId(userId);
    }

    public CodeReviewResponse analyzeCode(Integer submissionId) {

        CodeSubmission submission = getSubmission(submissionId);

        String feedback = openAIService.analyzeCode(
                submission.getCodeContent(),
                submission.getLanguage(),
                submission.getTitle());

        CodeReview review = CodeReview.builder()
                .submissionId(submissionId)
                .feedback(feedback)
                .issuesFound(0)
                .improvementsSuggested(0)
                .overallScore(75)
                .reviewType("AUTOMATED")
                .build();

        reviewRepository.save(review);

        return CodeReviewResponse.fromEntity(review);
    }

    public CodeReviewResponse getReview(Integer submissionId) {

        CodeReview review = reviewRepository.findBySubmissionId(submissionId)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        return CodeReviewResponse.fromEntity(review);
    }
}