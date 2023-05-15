import React from 'react'

function Map01() {
  const FRUIT = [
    {number: 1, title: "임계구역"},
    {number: 2, title: "피터슨"},
    {number: 3, title: "생산자"},
    {number: 4, title: "소비자"},
    {number: 5, title: "물건"},
  ]

  const bbb = FRUIT.map((el) => <div key={el.number}>{el.title}</div> )
  return (
    <div>
      {bbb}
    </div>
  )
}

export default Map01;