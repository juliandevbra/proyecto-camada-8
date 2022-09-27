import React from 'react'
import useFetch from './useFetch'

const Lista = ({search}) => {

    const mlUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    const listaML = useFetch(mlUrl)
    console.log(listaML)

  return (
    <div>
        {listaML.data?.results.map(item => 
            <div key={item.id}>
                <h3>{item.title}</h3>
                <h4>${item.price}</h4>
                <img src={item.thumbnail} alt=''/>
            </div>
        )}
    </div>
  )
}

export default Lista