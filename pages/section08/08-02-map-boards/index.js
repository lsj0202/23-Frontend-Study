import React from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'

const FETCH_BOARDS = gql`
  query{
    fetchBoards{
      number
      writer
      title
    }
  }
`
const DELETE_BOARD = gql`
  mutation deleteBoard($number : Int){
    deleteBoard(number : $number){
      message
    }
  }
`

function index() {
  const { data } = useQuery(FETCH_BOARDS)
  const [deleteBoard] = useMutation(DELETE_BOARD)
  console.log(data?.fetchBoards)

  const onClickDelete = (event) => {
    deleteBoard({
      variables : {
        number : Number(event.target.id)
      },
      refetchQueries : [{query: FETCH_BOARDS}]
    })
  }
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span>{el.number} 번째 게시물<br/></span>
          <span>제목 : {el.title}<br/></span>
          <span>작성자 : {el.writer}<br/></span>
          <button onClick={onClickDelete} id={el.number}>삭제</button>
          <br/><br/>
        </div>
      ))}
      {/* <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data && data.fetchBoard.contents}</div> */}
    </>
  )
}

export default index;