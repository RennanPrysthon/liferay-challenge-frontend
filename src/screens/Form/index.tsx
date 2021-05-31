import React, { FormEvent, useRef } from 'react'

import { Container, Table, Submit} from './styles'


const Form: React.FC<FormProps> = ({ submit }) => {
  const name = useRef<HTMLInputElement>(null)
  const form = useRef<HTMLFormElement>(null)
  const type = useRef<HTMLSelectElement>(null)
  const imported = useRef<HTMLInputElement>(null)
  const price = useRef<HTMLInputElement>(null)

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault()

    if (
      name.current?.value &&
      type.current?.value &&
      imported.current?.value &&
      price.current?.value 
    ){
      let product: ProductType = {
        imported: imported.current.checked,
        name: name.current.value, 
        type: type.current.value, 
        price: Number(price.current.value)
      }

      submit(product)
      form.current?.reset()
    }
  }

  return (
    <Container onSubmit={handleSubmitForm} ref={form}>
      <Table>
        <tr>
          <th>Name</th>
          <td>
            <input type="text" ref={name} />
          </td>
        </tr>
        <tr>
          <th>Type</th>
          <td>
            <select ref={type} defaultValue="OT">
              <option value="OT">Other</option>
              <option value="BO">Book</option>
              <option value="FO">Food</option>
              <option value="ME">Medical</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>Imported</th>
          <td>
            <input type="checkbox" ref={imported} />  
          </td>
        </tr>
        <tr>
          <th>Price</th>
          <td>
            <input type="text" ref={price} />
          </td>
        </tr>
      </Table>

      <Submit>
        <button onClick={() => name.current?.focus()}>
          add
        </button>
      </Submit>  
    </Container>
  )
}

export default Form