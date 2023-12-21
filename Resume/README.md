# Hosting Your Resume on AWS

## Overview

This repository guides you through the process of hosting your resume on Amazon Web Services (AWS) using various services such as S3, Route 53, Certificate Manager, and CloudFront. By following these steps, you'll be able to create a secure and easily accessible resume website.

Estimated Reading Time: 6 minutes
Estimated Setup Time: 1 hour

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Step 1: Create an S3 Bucket](#step-1-create-an-s3-bucket)
   - [Step 2: Upload Your Files to S3](#step-2-upload-your-files-to-s3)
   - [Step 3: Edit Bucket Policy](#step-3-edit-bucket-policy)
   - [Step 4: Enable Static Website Hosting](#step-4-enable-static-website-hosting)
3. [Improving the Solution](#improving-the-solution)
   - [Step 5: Buy a Domain Name](#step-5-buy-a-domain-name)
   - [Step 6: Create a Hosted Zone in Route 53](#step-6-create-a-hosted-zone-in-route-53)
   - [Step 7: Create a Record in Route 53](#step-7-create-a-record-in-route-53)
   - [Step 8: Acquire an SSL Certificate](#step-8-acquire-an-ssl-certificate)
   - [Step 9: Create a CloudFront Distribution](#step-9-create-a-cloudfront-distribution)
   - [Step 10: Modify Route 53 Route Table](#step-10-modify-route-53-route-table)
4. [Conclusion](#conclusion)

## Introduction

In this guide, we'll walk through the process of hosting your resume on AWS using S3 for storage, Route 53 for domain routing, Certificate Manager for SSL certification, and CloudFront for added security and performance.

## Getting Started

### Step 1: Create an S3 Bucket

1. Keep the bucket name the same as your domain name.
2. Uncheck "Block all public access" to make your resume accessible over the internet.

### Step 2: Upload Your Files to S3

Upload HTML, CSS, JavaScript, and any other necessary files to the S3 bucket.

### Step 3: Edit Bucket Policy

Edit the bucket policy in the Permissions tab to allow read access. Change "Resource" to your bucket resource ID.

### Step 4: Enable Static Website Hosting

Enable static website hosting in the Properties tab, providing the index document name. Access your website using the provided Static website URL.

## Improving the Solution

### Step 5: Buy a Domain Name

Buy a domain name from AWS or another provider.

### Step 6: Create a Hosted Zone in Route 53

Create a hosted zone in Route 53 by entering your domain name.

### Step 7: Create a Record in Route 53

Create a record of type "A," toggle the alias button, and select your S3 bucket.

### Step 8: Acquire an SSL Certificate

Create a certificate in the N. Virginia region using AWS Certificate Manager. Verify the certificate using Route 53 records.

### Step 9: Create a CloudFront Distribution

Create a CloudFront distribution, specifying your S3 bucket as the origin domain. Configure SSL settings and other options.

### Step 10: Modify Route 53 Route Table

Edit the "A type" record in Route 53 to route traffic to "Alias to CloudFront" and select the CloudFront ARN.

## Conclusion

Congratulations! Your resume is now hosted on AWS, accessible via your custom domain name and secured with HTTPS. For more details on each step, refer to the corresponding section in this guide.

Happy hosting!
