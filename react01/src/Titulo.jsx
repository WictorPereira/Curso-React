import { useState } from "react" ;

function Titulo({ cor }){
    const [texto, setTexto] = useState ("Titulo Inicial")
    const [inputText, setInputText] = useState ("")

    function clicou (){
        setTexto(inputText)
    }

    return <div>
                <h1 style={{color: cor }}>{texto}</h1>
                <input  value={inputText} onChange={(e)=> {setInputText (e.target.value)}} type="text" />
                <button onClick={clicou}>Clicar</button>
            </div>
}

export default Titulo