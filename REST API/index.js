const AWS = require('aws-sdk');

// Set the region for DynamoDB
AWS.config.update({ region: 'us-east-1' });

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { httpMethod, body } = event;
  let response;

  try {
    switch (httpMethod) {
      case 'GET':
        response = await getItems();
        break;
      case 'POST':
        response = await createItem(JSON.parse(body));
        break;
      case 'PUT':
        response = await updateItem(JSON.parse(body));
        break;
      case 'DELETE':
        response = await deleteItem(JSON.parse(body));
        break;
      default:
        response = buildResponse(400, 'Invalid HTTP method test2'+JSON.stringify(event));
    }
  } catch (error) {
    console.error('Error:', error);
    response = buildResponse(500, 'Internal Server Error'+JSON.stringify(error));
  }

  return response;
};

async function getItems() {
  const params = {
    TableName: 'CRUD-DB',
  };

  const result = await dynamoDB.scan(params).promise();

  return buildResponse(200, result.Items);
}

async function createItem(item) {
  const params = {
    TableName: 'CRUD-DB',
    Item: item,
  };

  await dynamoDB.put(params).promise();

  return buildResponse(201, 'Item created successfully');
}

async function updateItem(item) {
  const { id, ...attributes } = item;

  const params = {
    TableName: 'CRUD-DB',
    Key: { id },
    UpdateExpression: 'set ' + Object.keys(attributes).map(key => `${key} = :${key}`).join(', '),
    ExpressionAttributeValues: Object.keys(attributes).reduce((acc, key) => {
      acc[`:${key}`] = attributes[key];
      return acc;
    }, {}),
    ReturnValues: 'UPDATED_NEW',
  };

  await dynamoDB.update(params).promise();

  return buildResponse(200, 'Item updated successfully');
}

async function deleteItem(item) {
  const { id } = item;

  const params = {
    TableName: 'CRUD-DB',
    Key: { id },
  };

  await dynamoDB.delete(params).promise();

  return buildResponse(200, 'Item deleted successfully');
}

function buildResponse(statusCode, body) {
  return {
    statusCode,
    body: JSON.stringify(body),
  };
}
