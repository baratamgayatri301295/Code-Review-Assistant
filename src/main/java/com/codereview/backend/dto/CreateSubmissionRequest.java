package com.codereview.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateSubmissionRequest {

    private Integer userId;
    private String title;
    private String codeContent;
    private String language;
    private String description;
}