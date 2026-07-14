package com.codereview.backend.repository;

import com.codereview.backend.entity.CodeSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CodeSubmissionRepository extends JpaRepository<CodeSubmission, Integer> {

    List<CodeSubmission> findByUserId(Integer userId);
}