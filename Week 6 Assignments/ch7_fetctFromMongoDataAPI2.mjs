const api_endpoint =
  "https://us-east-1.aws.data.mongodb-api.com/app/data-quwlt/endpoint/data/v1/action/findOne";

const myBody = {
  collection: "listingsAndReviews",
  database: "sample_airbnb",
  dataSource: "Cluster0",
  filter: {
    property_type: "Apartment",
  },
  projection: {
    listing_url: 1,
    name: 1,
    summary: 1,
    property_type: 1,
    cancellation_policy: 1,
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
