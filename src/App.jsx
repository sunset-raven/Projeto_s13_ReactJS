import  Header  from './Minor_components/Header'
import  Bio  from './Major_components/Bio'
import  Cards  from './Major_components/Cards'
import  Footer  from './Minor_components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meus conteúdos favoritos" />
      <Bio />
      <Cards />
      <Footer content="Feito com ♡ (e um pouco de ódio) por Andréa. Todos os direitos são reservados." />
    </div>
  )
}

export default App