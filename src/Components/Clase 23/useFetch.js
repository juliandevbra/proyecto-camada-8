import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState()

    useEffect(() => {
        axios(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [url])

  return {data}
}

export default useFetch