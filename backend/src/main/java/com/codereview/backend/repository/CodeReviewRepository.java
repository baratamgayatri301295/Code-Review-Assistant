package com.codereview.backend.repository;

import com.codereview.backend.entity.CodeReview;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CodeReviewRepository extends JpaRepository<CodeReview, Integer> {

    Optional<CodeReview> findBySubmissionId(Integer submissionId);
}

