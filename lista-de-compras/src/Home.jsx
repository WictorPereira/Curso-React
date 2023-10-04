import {useRef,useState } from 'react'
import { v4 } from 'uuid'
import './Home.css'

function Home() {

  const inputRef = useRef()
  const [produtos, setProdutos]= useState([])

  function cliqueiNoBotao(){
    setProdutos([{id:v4(), nome:inputRef.current.value},...produtos])
    inputRef.current.value=""
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
      <div className='container'>
        <h1>Lista de Compras</h1>
        <input ref={inputRef} placeholder='Adicione o Produto...' />
        <button className='adicionar' onClick={cliqueiNoBotao}>Adicionar</button>
        
        {produtos.map ((produto) =>(
          <div className='div-produtos' key={produto.id}>
            <p>{produto.nome}</p>
            <button  onClick={()=> deletarProduto(produto.id)}>🗑️</button>
            </div>
          ))}
          
      </div>
  )
}

export default Home
