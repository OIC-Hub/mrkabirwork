import { useState, useRef } from "react"

function Contact() {
  const [count, setCount] =useState(0)
  let att = useRef(0)
  let getDom = useRef()
  let chdom = useRef()
  att.current=count

  let checkDom =()=>{
      getDom.current.style.backgroundColor='blue'
  }
     function ch(){
                 chdom.current.innerHTML="Welcome to React class"
              }
  return (
    <div id="contactPage">
   <h1 className="banner">Contacts</h1>
    <section className="text-area">
        <p>{att.current}</p>
      <h1 ref={chdom} onClick={ch}> Hello World</h1>
      <input ref={getDom} type="number" name="name"  onChange={checkDom}/>
      <p></p>
       <button onClick={e=> {
        setCount(count + 1 )
       }}>Increment</button>
    </section>
    </div>
  )
}

export default Contact