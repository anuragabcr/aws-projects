# Hosting Frontend Website on AWS Amplify

## Overview

This guide takes you through the process of hosting a frontend website on AWS Amplify, leveraging several AWS services to enhance functionality and security. The application architecture involves AWS Amplify for hosting, AWS Cognito for user authentication, DynamoDB for data storage, Lambda functions for CRUD operations, and API Gateway for access to those functions.

[Go to medium blog for detailed Guide](https://medium.com/@anuragabcr/hosting-frontend-website-on-aws-amplify-f2c699bf62f0)

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Step 1: Create a New Amplify App](#step-1-create-a-new-amplify-app)
   - [Step 2: Enable AWS Cognito for Authentication](#step-2-enable-aws-cognito-for-authentication)
   - [Step 3: Create a DynamoDB Table](#step-3-create-a-dynamodb-table)
   - [Step 4: Create IAM Role for Lambda](#step-4-create-iam-role-for-lambda)
   - [Step 5: Create a Lambda Function for CRUD](#step-5-create-a-lambda-function-for-crud)
   - [Step 6: Access the Lambda Function using API Gateway](#step-6-access-the-lambda-function-using-api-gateway)
3. [Conclusion](#conclusion)

## Introduction

This guide demonstrates how to host a frontend website on AWS Amplify and integrate various AWS services for enhanced functionality and security. The provided steps cover the setup of AWS Amplify, AWS Cognito for authentication, DynamoDB for data storage, Lambda functions for CRUD operations, and API Gateway for accessing these functions.

## Getting Started

### Step 1: Create a New Amplify App

1. Click on the “New App” button.
2. Select “Host web App” and choose "GitHub" as your code source.
3. Follow the prompts to grant AWS Amplify access to your GitHub repository.
4. Select the repository and branch you want to deploy.

At the end of this step, your website will be hosted on AWS Amplify.

### Step 2: Enable AWS Cognito for Authentication

1. Go to the AWS Cognito page.
2. Click on “Create user Pool” and configure user pool settings.
3. Optionally enable MFA or choose email providers.
4. Finish creating the user pool.

Update your Cognito configuration file with the User Pool ID and Client ID.

### Step 3: Create a DynamoDB Table

1. Go to the AWS DynamoDB page.
2. Select “Create Table” and configure table settings based on your application requirements.

### Step 4: Create IAM Role for Lambda

1. Go to the AWS IAM page.
2. Click on “Create Role” for Lambda.
3. Select “AWSLambdaBasicExecutionRole” in permissions policies.
4. Create the role and attach the “DynamoDBWriteAccess” policy.

### Step 5: Create a Lambda Function for CRUD

1. Go to the AWS Lambda page.
2. Click on “Create function” and configure the function.
3. Use an existing role created in IAM.
4. Write your own code or use provided code from the GitHub repo.
5. Deploy the Lambda function.

### Step 6: Access the Lambda Function using API Gateway

1. Go to the AWS Lambda function page.
2. Select “Create API” and choose “Rest API”.
3. Create a resource and method, integrating with the Lambda function.
4. Deploy the API Gateway.

Update your application with the provided Invoke URL for Lambda function calls.

## Conclusion

Congratulations! You have successfully hosted a frontend website on AWS Amplify, incorporating AWS services for authentication, data storage, and serverless CRUD functionality. The outlined steps have helped you establish a robust application architecture on AWS.

Happy coding!
