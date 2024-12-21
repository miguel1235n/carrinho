import Painel from "./page/Painel"
import Login from "./page/Login"
import { useContext } from "react"
import { AutenticacaoContext } from "./contexts/AutenticacaoContext"

function App() {
    const { logado } = useContext(AutenticacaoContext)

    if(logado) {
      return <Painel/>
    }

    return <Login/>
}

export default App
