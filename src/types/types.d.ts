
declare interface FormProps {
  submit: (
    product: ProductType
  ) => void
}

declare interface ProductType {
  id?: number
  price: number
  name: string
  type: string
  imported: boolean
}

declare interface TableProps {
  rows: ProductType[]
  remove: (index: number) => void
}

declare interface ModalProps {
  response: ResponseProps,
  resetResponse: () => void
}

declare interface ResponseProps {
  products: ProductType[],
  finalValue: number,
  salesTaxes: number
}