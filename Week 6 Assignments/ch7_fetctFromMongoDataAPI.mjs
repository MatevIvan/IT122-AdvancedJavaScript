const api_endpoint =
  "https://us-east-1.aws.data.mongodb-api.com/app/data-quwlt/endpoint/data/v1/action/findOne";

const myBody = {
  collection: "listingsAndReviews",
  database: "sample_airbnb",
  dataSource: "Cluster0",
  filter: {
    beds: 2,
    property_type: "House",
  },
  projection: {
    _id: 1,
    beds: 1,
    name: 1,
    bedrooms: 1,
  },
};

const response = await fetch(api_endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": "eU2JqEy8sNoXGwuzu6dPyGLkgTqicOkH3Iebg8swIOH8aft9ExFFGukgMllWU9L5",
  },
  body: JSON.stringify(myBody),
});

const json_response = await response.json();
console.log(json_response);
