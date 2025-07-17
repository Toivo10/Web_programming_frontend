// Tämä komponentti sisältää lomakkeen uuden reseptin lisäämistä varten.
// Nyt resepti koostuu: nimestä, ainesosista ja valmistusohjeista.

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import recipeService from '../services/recipeService'

const RecipeForm = () => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRecipe = { name, ingredients, instructions }

    // Lähetetään resepti backendille ja palataan etusivulle
    recipeService.create(newRecipe).then(() => {
      navigate('/')
    })
  }

  return (
    <div>
      <h2>Lisää uusi resepti</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Nimi:{' '}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          Ainekset:{' '}
          <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </div>
        <div>
          Valmistusohjeet:{' '}
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            cols={40}
          />
        </div>
        <button type="submit">Tallenna</button>
      </form>
    </div>
  )
}

export default RecipeForm