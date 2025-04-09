import React, { useState } from "react"
import data from "./data"
import { nanoid } from "nanoid"

const App = () => {
  const [text, setText] = useState([data[0]])
  const [count, setCount] = useState(1)

  function submissionHandler(e) {
    e.preventDefault()
    setText(data.slice(0, count))
  }

  return (
    <section className='section-center'>
      <h4>Tired of boring Lorem Ipsum?</h4>
      <form className='lorem-form' onSubmit={submissionHandler}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min={1}
          step={1}
          max={data.length}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>
        })}
      </article>
    </section>
  )
}
export default App
