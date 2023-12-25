# Serverless REST API with AWS Lambda and DynamoDB

This guide walks you through the process of creating a Serverless REST API in AWS using Lambda functions for CRUD functionality and DynamoDB as the NoSQL database. API Gateway is used to define routes and make the Lambda function accessible.

[Go to medium blog for detailed Guide](https://medium.com/@anuragabcr/creating-serverless-rest-api-using-aws-lambda-a9aaa462307b)

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Step 1: Create a DynamoDB Table](#step-1-create-a-dynamodb-table)
   - [Step 2: Create a Lambda Function](#step-2-create-a-lambda-function)
   - [Step 3: Assign IAM Role to Lambda](#step-3-assign-iam-role-to-lambda)
   - [Step 4: Create API Gateway](#step-4-create-api-gateway)
   - [Step 5: Test API Endpoints](#step-5-test-api-endpoints)

## Introduction

This guide demonstrates the creation of a Serverless REST API in AWS using Lambda functions, DynamoDB, and API Gateway. Follow the outlined steps to implement CRUD functionality and expose your API endpoints.

## Getting Started

### Step 1: Create a DynamoDB Table

1. Go to the AWS DynamoDB page.
2. Click on the "Create Table" button.
3. Give the table a name.
4. Provide a Partition key name (consider it as an ID for each row, similar to a Primary key in SQL).
5. Keep everything else as default and click on the "Create Table" button.

### Step 2: Create a Lambda Function

1. Go to the AWS Lambda page.
2. Click on the "Create Function" button.
3. Choose "Author from Scratch" and give the function a name.
4. Choose the Runtime as Node.js 16 or according to your application requirements.
5. Keep everything else as default and click on the "Create Function" button.
6. Paste your Lambda function code in the Code Section.

### Step 3: Assign IAM Role to Lambda

1. Open your Lambda function.
2. Scroll to the Configuration tab and click on the Role name.
3. In the Permissions tab, click on "Add permission."
4. Attach the "AmazonDynamoDBFullAccess" permission, allowing Lambda to access DynamoDB.
5. Click "Add permissions."

### Step 4: Create API Gateway

1. Go to the AWS API Gateway page.
2. Click on the "Create API" button.
3. Click on the "Build" button in the REST API section.
4. Select "New API" and give it a name.
5. For API endpoint type, select 'Regional' or 'Edge-optimized' for public access.
6. Click on the "Create method" button for each method used in the Lambda function.
7. Select "Lambda function" as Integration Type, enable "Lambda proxy integration," and choose the correct Lambda function.
8. Click on the "Create method" button for each method.
9. Once done, click on the "Deploy API" button, select the stage as new, and give it a name.

### Step 5: Test API Endpoints

Use tools like Postman to test the API endpoints or any other preferred testing tools.

Congratulations! Your Serverless REST API with AWS Lambda and DynamoDB is now set up and ready for use.

Happy coding!
