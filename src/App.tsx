
import Page from "../src/page/Page"
import useRecetas from "./hook/useRecetas"


const App = () =>  {
const { recetas, categorias, getNombresCategorias } = useRecetas()




  return (
    <>
    <Page
    recetas={recetas}
    getNombresCategoria={getNombresCategorias}
    categorias={categorias}
    
  
    />
    </>
  )
}

export default App
