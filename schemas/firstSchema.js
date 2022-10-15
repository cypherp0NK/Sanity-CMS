export default {
    type: "document", //value must be a schema type e.g document
    name: "author", //value can be any word
    title: "Author", //value can be any word
    fields: [ //creates an input field for using the schema in the studio
      {
        type: "string",
        name: "name",
        title: "Author's Name"
      }
    ]  
  }