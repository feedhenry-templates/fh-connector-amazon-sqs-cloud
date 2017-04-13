# FeedHenry Amazon SQS Connector

[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-amazon-sqs-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-amazon-sqs-cloud)

The FeedHenry Amazon SQS Connector. For more information on Amazon SQS see: [https://github.com/aws/aws-sdk-js](https://github.com/aws/aws-sdk-js).

## Group Amazon SQS Connector API

### List all queues

|              |              |
|--------------|--------------|
| Endpoint     | /cloud/sqs   |
| HTTP Method  | POST         |

#### Request (application/json)

##### Body
          
```json
{
}
````

#### Response 200 (application/json)

##### Body

```json
{
}
````
## Tests

All the tests are in the "test/" directory. The cloud app is using mocha as the test runner. 

### Unit tests

```shell
npm run unit
```

### Unit coverage

```shell
npm run coverage
```
