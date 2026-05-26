# AWS Deployment Notes
## Overview
This document tracks the AWS deployment phase of the project. The current focus is moving the React frontend from a local Docker/Vite deployment environment to AWS S3 static website hosting.<br><br>
The long-term deployment goal is to sue S3 fro the frontend and ECS/Fargate for the containerized backend.

## S3 Static Frontend Hosting

## React Production Build Process
The frontend initially only supported development locally using: <br>
frontend/package.json<br>
scripts: { dev: vite --host 0.0.0.0}<br>
Which allows the React/Vite frontend to run locally inside the Docker container during development<br><br>

AWS S3 static website hosting requires a production-ready static build rather than a live Vite development server. To support production builds, the following script was added: <br>
"build": "vite build"<br>
This enabled the npm run build command and generated the dist directory containing:
- index.html
- JavaScript bundles
- frontend assets
<br>
These generated static files were then uploaded directly into the S3 bucket for static web hosting.

## Static Website Hosting

## Bucket Policies and Public Access

## Troubleshooting Asset Paths
The initial S3 deployment rendered a blank page because the generated Vite asset file was uploaded to the bucket root instead of the '/assets' directory expected by 'index.html'. <br><br>
Incorrect Structure: <br>

index.html
index-xxxxx.js

Correct Structure: <br>
index.html
assets/
    index-xxxxx.js<br><br>



## Security Considerations
The S3 bucket was configured for public read access because static website users need to download frontent files. <br><br>

The bucket policy only grants `s3:GetObject`, which allows public users to read objects but does not allow them to upload, modify, or delete files.<br><br>

Administrative access remains controlled through the AWS IAM admin user rather than the root user


## Screenshots (AWS)

### React Production Build Generation
![Dist file creation](../screenshots/dist-folder-creation.png)

### S3 Bucket
![S3 Bucket](../screenshots/s3-bucket.png)

### S3 Policy & Access
![S3 Policy](../screenshots/s3-policy-access.png)

### S3 Static Frontend
![S3 Frontend](../screenshots/s3-static-frontend.png)