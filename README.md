# Serverless Webinar Lab

Future without servers. 

## Description

This project contains code examples to get into event oriented architectures

## Getting Started

The API receives information from users,
The event is going to be processed in two ways: Sync and Async.
The information is going to be persisted in a DynamoDB table

The src folder contains the code for each microservice:

* function_sqs: microservice for async invocations
* function: microservice for sync invocations

### Dependencies

* [NodeJs](https://nodejs.org/)
* [AWS SAM](https://docs.aws.amazon.com/serverless-application-model)
* [Express](https://expressjs.com/es)
* [AWS SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest)
* [Docker](https://www.docker.com)

### Installing

* Go to the root directory 
* Build the SAM project (Docker Approach)
```
  sam build --use-container 
```
* Deploy the SAM project (First time)
```
  sam deploy --guided --profile <your_aws_profile>
```
* Next deployments
```
  sam build --use-container
  sam deploy --guided --profile <your_aws_profile>

```

### Executing program

When you have deployed the project in your account, import the POSTMAN collection (attached to the source code)
Note: do not forget to update the API URL in your environment configuration 

## Authors

restebance  
[@restebance](https://medium.com/@restebance)

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

* [Ayté](https://ayte.co)
