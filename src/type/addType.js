const fs = require('fs');

const addType = typeName => {
  const path = process.cwd() + '/src/store/' + typeName + '.ts';

  const content =
    `import { types } from 'mobx-state-tree';

  const ` +
    typeName +
    ` = types
  .model('` +
    typeName +
    `', {
    id: types.identifier,
  });
  
  export default ` +
    typeName +
    `;
`;

  fs.writeFileSync(path, content, 'utf-8');
};

module.exports = addType;
