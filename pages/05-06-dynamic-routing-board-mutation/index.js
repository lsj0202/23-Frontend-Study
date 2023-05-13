import { gql,useMutation } from '@apollo/client';
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer:$writer, title:$title, contents: $contents){
      _id
      number
      message
    }
  }
`
export default function index() {
  const [나의함수] = useMutation(CREATE_BOARD)

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      }
    })
    alert(result.data.createBoard.message)
    console.log(result)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter}/><br/>
      제목:  <input type="text" onChange={onChangeTitle}/><br/>
      내용:  <input type="text" onChange={onChangeContents}/><br/>
      <button onClick={onClickSubmit}>GRAPH-API(동기) 요청하기</button>
    </>
  )
}