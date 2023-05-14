import React from 'react'
import { useMutation } from '@apollo/client';
import { useState } from 'react'
import Presenter from './BoardWrite.presenter';
import { CREATE_BOARD } from './BoardWrite.quries'

function presenter() {
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
    <Presenter 
      s={onClickSubmit}
      w={onChangeWriter}
      t={onChangeTitle}
      c={onChangeContents}
    />
  )
}

export default presenter