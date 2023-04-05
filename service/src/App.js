import React, { useEffect } from 'react'
import { get, HttpCilent } from './services/HttpClient'

const htppCilent = new HttpCilent()

export default function App() {

  useEffect(() => {
    htppCilent.get('posts', {
      params: {
        id: 2
      }
    }).then(response => console.log(response))
  }, [])


  return (
    <div>

    </div>
  )
}
