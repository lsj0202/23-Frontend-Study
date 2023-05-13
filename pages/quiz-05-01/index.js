import React from 'react'
import {useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`

function index() {
  const [memory] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await memory({
      variables: {
        writer: "이상진",
        title: "스즈메의 문단속",
        contents: "5점"
      }
    })
    console.log(result)
  }
  return (
    <button onClick={onClickSubmit}>GQL API request</button>
  )
}

export default index