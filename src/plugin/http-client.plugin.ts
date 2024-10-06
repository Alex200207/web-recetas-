

const httpClientplugin = {
  get: async (url: string) => {
    try{
        const peticion = await fetch(url)
        const res = await peticion.text
        return res
    }
    catch(err){
        console.error(err)
    }

    }
  }

export {
  httpClientplugin as http
};
