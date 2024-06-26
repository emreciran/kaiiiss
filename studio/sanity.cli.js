import {defineCliConfig} from 'sanity/cli' // Importing defineCliConfig function from Sanity's CLI module

// Defining CLI configuration using defineCliConfig function
export default defineCliConfig({
  api: {
    projectId: 'qezjc3p6', // Setting the project ID for the Sanity API
    dataset: 'production', // Setting the dataset name for the Sanity API
  },
})
