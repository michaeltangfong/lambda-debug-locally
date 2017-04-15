# Debugging AWS Lambda Code Locally

## Lambda function’s execution role

### Permission
Create policy for all aws services used in function

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1490774678000",
            "Effect": "Allow",
            "Action": [
                "cloudwatch:*"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}

### Trust Relationshop
Add services and user
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "lambda.amazonaws.com",
          "dynamodb.amazonaws.com"
        ],
        "AWS": "user_arn"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}