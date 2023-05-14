import { gql,useMutation } from '@apollo/client';

import React from 'react'
const CREATE_BOARD = gql`
  mutation{
    createBoard(writer:"이상진", title:"BSSM", contents: "2112"){
      _id
      number
      message
    }
  }
`

export default function index() {
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await 나의함수()
    console.log(result.data)
  }
  return (
    <>
      <button onClick={onClickSubmit}>GRAPH-API(동기) 요청하기</button>
    </>
  )
}