import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      number
      writer
      title
      contents
    }
  }
`

function index() {
  const router = useRouter()

  console.log(router)
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.qqq) }
  })
  console.log(data)
  return (
    <>
      <div>{router.query.qqq} 번째 게시물입니다.</div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data && data.fetchBoard.contents}</div>
    </>
  )
}

export default index;