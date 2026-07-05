package com.codereview.backend.dto;

import com.codereview.backend.entity.CodeReview;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CodeReviewResponse {

    private Integer id;
    private Integer submissionId;
    private String feedback;
    private Integer issuesFound;
    private Integer improvementsSuggested;
    private Integer overallScore;
    private String reviewType;

    public static CodeReviewResponse fromEntity(CodeReview review) {
        return CodeReviewResponse.builder()
                .id(review.getId())
                .submissionId(review.getSubmissionId())
                .feedback(review.getFeedback())
                .issuesFound(review.getIssuesFound())
                .improvementsSuggested(review.getImprovementsSuggested())
                .overallScore(review.getOverallScore())
                .reviewType(review.getReviewType())
                .build();
    }
}