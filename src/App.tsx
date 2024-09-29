import Page from "../src/page/Page"
import useRecetas from "./hook/useRecetas"


const App = () =>  {
const { recetas } = useRecetas()


  return (
    <>
    <Page
    recetas={recetas}
    />
    </>
  )
}

export default App
