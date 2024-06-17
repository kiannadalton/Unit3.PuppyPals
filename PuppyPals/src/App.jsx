import {useState} from 'react'
import {puppyList} from './data.js'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  
  console.log(puppies);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div className='App'>

    <h1>Puppy Pals</h1>
    
      { puppies.map((puppy) => {

        // const featuredPup = puppies.find((pup)=> pup.id === featPupId)
        // console.log(featuredPup)

        return (<p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>
          {puppy.name}
        </p>

     );
   })}
      <h1>Puppy ID:</h1>
      { featPupId && (
         <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
         </div>  
        )}
    
    </div>
  )
}

export default App
