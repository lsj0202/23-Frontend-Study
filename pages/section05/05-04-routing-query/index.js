import React from 'react'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
  query{
    fetchBoard(number : 3347){
      number
      writer
      title
      contents
    }
  }
`

function index() {
  const { data } = useQuery(FETCH_BOARD)
  console.log(data)
  return (
    <>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data && data.fetchBoard.contents}</div>
    </>
  )
}

export default index;