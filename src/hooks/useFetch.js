import { useEffect,useState } from "react"

export const useFetch = (url) => {

    const [ state,setState] = useState({
        isLoading: true,
        items: [],
        error: ""
    })

    useEffect(() => {
        
        fetch(url)
            .then(response  => response.json())
            .then(data =>{
                console.log("data",data)
                setState((prevState)=> ({
                    ...prevState,
                    isLoading : false,
                    items: data
                }))
            })
            .catch(err => {
                
                setState(prevState => (
                    {
                        ...prevState,
                        error:"An error has occured,try later"
                    }
                ))
            })

            
            
            
          
        
    },[])

    return [
        state.isLoading,
        state.items,
        state.error
    ]

}