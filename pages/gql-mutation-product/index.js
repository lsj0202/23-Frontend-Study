import { gql,useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation createProduct($seller : String, $createProductInput : CreateProductInput!) {
    createProduct(seller : $seller, createProductInput : $createProductInput){
      _id
      number
      message
    }
  }
`

export default function index() {
  const [create_product] = useMutation(CREATE_PRODUCT)



  const onClickSubmit = async () => {
    const result = await create_product({
      variables : {
        seller: "훈이",
        createProductInput : {
          name: "훈이동산",
          detail: "주먹밥나무",
          price: 5000
        }
      }
    })
    alert(result.data.createProduct.message)
    console.log(result)
  }

  return (
    <>
      <button onClick={onClickSubmit}>GRAPH-API(동기) 요청하기</button>
    </>
  )
}