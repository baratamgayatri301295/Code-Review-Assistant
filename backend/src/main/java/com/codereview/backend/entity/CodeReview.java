package com.codereview.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "code_reviews")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CodeReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "submission_id", nullable = false, unique = true)
    private Integer submissionId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String feedback;

    @Column(name = "issues_found")
    private Integer issuesFound;

    @Column(name = "improvements_suggested")
    private Integer improvementsSuggested;

    @Column(name = "overall_score")
    private Integer overallScore;

    @Column(name = "review_type")
    private String reviewType = "AUTOMATED";

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}