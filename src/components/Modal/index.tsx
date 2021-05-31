import React from 'react'

import { Container, Table} from './styles'

const Modal: React.FC<ModalProps> = ({ response, resetResponse }) => {
  return (
    <Container onClick={resetResponse}>
      <div>
        <h2>Added products</h2>

        <Table>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Description
              </th>
              <th>
                Type
              </th>
              <th>
                Imported
              </th>
              <th>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {
              response.products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        {product.id}
                      </td>
                      <td>
                        {product.name}
                      </td>
                      <td>
                        {product.type}
                      </td>
                      <td>
                        {product.imported ? 'Yes' : 'No'}
                      </td>
                      <td>
                        {product.price}
                      </td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <th>Total Value</th>
              <td>{response.finalValue}</td>
            </tr>
            <tr>
              <th>Sales Taxes</th>
              <td>{response.salesTaxes}</td>
            </tr>
          </tfoot>
        </Table>
        
      </div>
    </Container>
  )
}

export default Modal