// Define a schema type for line spacing or line break

export default {
  name: 'break', // Type name in Sanity Studio
  type: 'object', // Object type for schema definition
  title: 'Break', // Display title in Sanity Studio

  // Fields within the 'break' object
  fields: [
    {
      name: 'style', // Field name
      type: 'string', // Data type (string)
      title: 'Break style', // Field title in Sanity Studio

      // Options for the field (dropdown list)
      options: {
        list: [
          {title: 'Line spacing', value: 'lineSpacing'}, // Option for line spacing
          {title: 'Line break', value: 'lineBreak'}, // Option for line break
        ],
      },
    },
  ],
}
