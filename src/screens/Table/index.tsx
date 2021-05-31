import React from 'react'

import { 
  Container, 
  TableContent 
} from './styles'

const Table: React.FC<TableProps> = ({ rows, remove }) => {
  function returnTypeName(type: string) {
    switch(type) {
      case 'BO': 
        return 'Book';
      case 'FO': 
        return 'Food';
      case 'ME': 
        return 'Medical';
    }

    return 'Other'
  }

  if (rows.length === 0) {
    return (
      <Container>
        <h1>You haven't added products yet</h1>
      </Container>
    )
  }

  return (
    <Container>
      <TableContent>
        <tbody>
          <tr>
            <th>N.</th>
            <th>Name</th>
            <th>Type</th>
            <th>Imported</th>
            <th>Price</th>
            <th></th>
          </tr>

          {rows.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{returnTypeName(product.type)}</td>
              <td>{product.imported ? 'Yes' : 'No'}</td>
              <td>{product.price}</td>
              <td><button onClick={() => remove(index)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </TableContent>

    </Container>
  )
}

export default Table