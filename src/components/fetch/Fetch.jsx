import React,{useState} from 'react'
import { useFetch } from '../../hooks/useFetch'

const Fetch = () => {
    const [isLoading,posts,error] = useFetch(`https://jsonplaceholder.typicode.com/posts`)

    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 3;

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const startIndex = currentPage * postsPerPage;
    console.log("startIndex",startIndex)
    const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);
    
  return (
    <div>
        <p>FETCH</p>
        {isLoading ?( <p>Loading ....</p> ): 
        error ? (<p>{error}</p>) : 
            (
            currentPosts.map( post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>

                </div>
            ))
            )
        } 

        <button onClick={handlePreviousPage}>Précédent</button>
        <button onClick={handleNextPage}>Suivant</button>
        

    </div>
  )
}

export default Fetch