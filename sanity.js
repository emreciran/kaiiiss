import { createClient } from "@sanity/client"; // Importing createClient function from Sanity's client module

// Creating a Sanity client instance using createClient function
export default createClient({
  projectId: "qezjc3p6", // Specify the project ID for the Sanity project
  dataset: "production", // Specify the dataset name within the project
  apiVersion: "2024-01-12", // Specify the API version to use for the client
  useCdn: false, // Disable CDN (Content Delivery Network) usage for this client instance
});
