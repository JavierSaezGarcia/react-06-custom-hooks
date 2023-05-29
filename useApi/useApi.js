import React, {useState, useEffect} from 'react';

export const useApi = (API) => {
  const [loading, setLoading] = useState(false)
	const [data, setData] = useState()  
	
	useEffect(() => {
	  setLoading(true)
	  fetch(API)
	    .then(data => data.json())
	    .then(json => {
	      setData(json)
	      setLoading(false)
	    })
	 
	}, [])

  return {loading, data}
}
// uso: const {loading, data} = useApi("https://example.com/api/principal")  