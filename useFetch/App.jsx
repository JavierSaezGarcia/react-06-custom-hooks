import { useFetch } from "./useFetch";
export const App = () => {
 
    const url = "https://rickandmortyapi.com/api/character";
    const { data } = useFetch(url);
  
    return (
      <div>
        <h1 className="title">Fetching data and create custom Hook</h1>
        <span className="subtitle">using Rick and Morty API</span>
        {
          (data.length > 0) && data.map( ({ id, image, name }) => (
            <div key={id}> 
              <img src={image} alt={image} /> 
              <p>{name}</p> 
            </div>
          ))
        }
      </div>
    )
  }