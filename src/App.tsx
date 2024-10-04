
import Page from "../src/page/Page"
import useRecetas from "./hook/useRecetas"


const App = () =>  {
const { recetas, categorias ,getNombreCategoria } = useRecetas()




  return (
    <>
    <Page

    recetas={recetas}
    getNombreCategoria={getNombreCategoria}
    categorias={categorias}
    />
    </>
  )
}

export default App
