import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const fetchURL = "https://jsonplaceholder.typicode.com"
  const getData = () =>
    fetch(`${fetchURL}/posts`).then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  console.log("DATA", data)
  return (
    <div>{data?.map((item) => <ul><li>{item.title}</li></ul>)}</div>
  )
}

export default App;
