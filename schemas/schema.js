import firstSchema from "./firstSchema"
import secondSchema from "./secondSchema";
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    firstSchema,
    secondSchema
  ]),
})