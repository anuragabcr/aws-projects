# Generate Image Thumbnails on S3 Upload with AWS Lambda

This blog provides a detailed guide on creating a serverless Lambda function that automatically generates thumbnails for images uploaded to an S3 bucket. Say goodbye to manual resizing and enhance your website's performance with instant thumbnails stored in a separate bucket.

## Overview

We will use AWS S3 buckets to store the original images and thumbnails and leverage an AWS Lambda function to perform the image conversion. The Lambda function will be written in Node.js.

### [Check the Detailed Blog](https://medium.com/@anuragabcr/generate-image-thumbnails-on-s3-upload-with-aws-lambda-4cc8d4130dae "Detailed Blog")

## Step 1: Creating S3 Buckets

Open your AWS console and navigate to the S3 bucket page. Create two buckets—one for storing the original images and another for storing the thumbnails.

## Step 2: Creating an IAM Role for the Lambda Function

1. Open the IAM page.
2. Click on the “Policies” tab.
3. Create a new policy using the JSON policy editor. Paste the provided JSON policy, replacing the bucket names.
4. Give the policy a name and click on the "Create Policy" button.

5. Open the IAM page.
6. Click on the “Roles” tab.
7. Create a new role.
8. Select “AWS service” as the Trusted entity type.
9. Choose “Lambda” as the use case.
10. Search for the policy created previously and select it.
11. Give the role a name and create the role.

## Step 3: Create the Lambda Function

1. Go to the AWS Lambda Function page.
2. Click on the “Create Function” button.
3. Select “Author from Scratch”.
4. Provide a name.
5. Select “Node.js 20” as the runtime.
6. In the Execution role section, select “Use an existing Role” and choose the role created earlier.
7. Create the function.

8. Go to the code section and upload the Lambda function code. If writing your own code, ensure to upload any libraries used for image resizing. If using the provided code, set an environment variable (DEST_BUCKET=<destination_thumbnail_bucket_name>).

## Step 4: Adding S3 Event Trigger

1. Open your Lambda function.
2. Click on “Add trigger”.
3. Select “S3” as the source.
4. Choose the 'source' or 'original' image bucket.
5. Check the “Recursive invocation” option.
6. Click the “Add” button.

Everything is set up. Now, any images uploaded to the source S3 bucket will automatically generate a new thumbnail stored in the destination S3 bucket.

Congratulations! You’ve successfully implemented serverless image resizing with your Lambda function, ensuring every upload to your S3 bucket creates a perfectly proportioned thumbnail, enhancing your website’s performance and user experience.

Happy Coding!
