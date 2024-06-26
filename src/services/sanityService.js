import sanityClient from "../../sanity";

/* Service to fetch data from Sanity.io */

class SanityService {
  /* FETCH SANITY DATA */
  // Method to fetch data of a specific type from Sanity.io
  getData = (type) => {
    return new Promise((resolve, reject) => {
      try {
        const query = `*[_type == '${type}']|order(orderRank)`; // Constructing the query to fetch data by type
        const data = sanityClient.fetch(query); // Fetching data using sanityClient
        resolve(data); // Resolving the promise with fetched data
      } catch (error) {
        reject(error); // Rejecting the promise if an error occurs
      }
    });
  };

  /* FETCH SANITY DATA BY SLUG */
  // Method to fetch data of a specific type by slug from Sanity.io
  getDataBySlug = (type, slug) => {
    return new Promise((resolve, reject) => {
      try {
        const query = `*[_type == '${type}' && slug.current == $slug][0]`; // Constructing the query to fetch data by type and slug
        const data = sanityClient.fetch(query, { slug }); // Fetching data using sanityClient with parameters
        resolve(data); // Resolving the promise with fetched data
      } catch (error) {
        reject(error); // Rejecting the promise if an error occurs
      }
    });
  };

  /* FETCH SANITY DATA BY COUNT */
  // Method to fetch limited count of data entries of a specific type from Sanity.io
  getDataByCount = (type, count) => {
    return new Promise((resolve, reject) => {
      try {
        const query = `*[_type == '${type}']|order(orderRank)[0...${count}]`; // Constructing the query to fetch limited data entries by type
        const data = sanityClient.fetch(query); // Fetching data using sanityClient
        resolve(data); // Resolving the promise with fetched data
      } catch (error) {
        reject(error); // Rejecting the promise if an error occurs
      }
    });
  };
}

const instance = new SanityService(); // Creating an instance of SanityService

export default instance; // Exporting the instance of SanityService for use in other parts of the application
