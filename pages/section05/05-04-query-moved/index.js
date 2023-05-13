import React from 'react'
import { useRouter } from 'next/router'
 
function index() {
  const router = useRouter()

  const onClickMove1 = () => {
    router.push("/05-04-routing-query")
  }
  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
    </>
  )
}

export default index;