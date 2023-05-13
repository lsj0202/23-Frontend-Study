import React from 'react'
import { useRouter } from 'next/router'

function StaticRoutingPage() {
  const router = useRouter()

  const onClickMove = () => {
    router.push("/routing-moved")
  }
  return (
    <button onClick={onClickMove}>페이지 이동하기</button>
  )
}

export default StaticRoutingPage