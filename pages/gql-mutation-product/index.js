import { gql,useMutation } from '@apollo/client';
import { useState } from 'react'

const CREATE_PRODUCT = gql`
  mutation createproduct($seller: String, $createProductInput: CreateProductInput!){
    createproduct(seller:$seller, createProductInput:$createProductInput){
      _id
      number
      message
    }
  }
`
export default function index() {
  const [나의함수] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
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