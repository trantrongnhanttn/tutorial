import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href='#'>hello world</a>
        </li>
      </ul>
    </div>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
