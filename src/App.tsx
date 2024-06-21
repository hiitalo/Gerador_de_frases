import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() { /*neste espaço, será a funcionalidade do sistema (que será onde mostra a frase que é gerada) */ 

  const[textoFrase, setTextoFrase] = useState("") 
  const[categoriaSelecionada, setCategoriaSelecionada] = useState(0) /*nessa parte estou chamando a categoria selecionada e no JScript o 1 sempre começa pelo 0 */

  const allfrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles. ',
        'O bom-senso vale mais do que muito conhecimento. ',
        'O riso é a menor distância entre duas pessoas. ',
        'Deixe de lado as preocupações e seja feliz. ',
        'Realize o óbvio, pense no improvável e conquiste o impossível. ',
        'Acredite em milagres, mas não dependa deles. ',
        'A maior barreira para o sucesso é o medo do fracasso. ',
      ]
    },
    {
     id: 2,
     nome: "Bom dia",
     frases: [
      'Que seu dia seja tão brilhante quanto o seu sorriso. Bom dia! ',
      'Cada manhã traz novas oportunidades. Aproveite-as! Bom dia! ',
      'Que o seu dia seja cheio de momentos felizes e realizações. ',
      'Acredite em si mesmo e em tudo o que você é. Bom dia! ',
      'Que hoje seja um dia repleto de luz e esperança. Bom dia! ',
     ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allfrases[categoriaSelecionada].frases.length) /* onde acontece gerar frases aleatóriar */

    setTextoFrase(allfrases[categoriaSelecionada].frases[numeroAleatorio])

  }

  return (
    <div className="container">
      <img
        alt="Logo frases"
        src={logoImg}
        className="logo"
      />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allfrases.map((item, index) => (
          <button 
          key={item.id}
          className="category-button"
          style={{
            borderWidth: item.nome === allfrases[categoriaSelecionada].nome ? 2.5 : 0, borderColor: "#1fa4db"
          }}

          onClick={ () => handleSwitchCategory(index)}
          >
            {item.nome}</button>
        ) )} 
        
        
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className="textoFrase">{textoFrase}</p>}

    </div>
  )
}

export default App
