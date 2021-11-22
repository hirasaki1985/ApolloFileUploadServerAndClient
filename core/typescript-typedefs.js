const { printSchema } = require('graphql');

module.exports = {
  plugin: (schema, documents, config) => {
    return [
      '// typeDefs',
      '',
      'export const typeDefs = gql`',
      printSchema(schema),
      '`;',
      '',
    ].join('\n');
  },
};
