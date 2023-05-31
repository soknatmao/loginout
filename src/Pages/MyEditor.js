import React, { useState } from 'react'
// import { Editor } from "primereact/editor";

import { Editor } from 'primereact/editor';
        

export default function MyEditor() {
  const [text, setText] = useState('');
  return (
    <main>
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} /> 
        <section>
            {
                text
            }
        </section>  
    </main>
  )
}