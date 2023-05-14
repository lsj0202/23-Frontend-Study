import * as A from './BoardWrite.styles'

function presenter(props) {
  return (
    <>
      작성자: <A.RedInput type="text" onChange={props.w}/><br/>
      제목:  <input type="text" onChange={props.t}/><br/>
      내용:  <input type="text" onChange={props.c}/><br/>
      <A.BlueButton onClick={props.s}>GRAPH-API(동기) 요청하기</A.BlueButton>
    </> 
  )
}

export default presenter