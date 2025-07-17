// Tämä komponentti näyttää kaikki reseptit listana (etusivu).
// Se hakee datan backendiltä ja näyttää reseptien nimet linkkeinä.

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import recipeService from '../services/recipeService'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  // Haetaan kaikki reseptit komponentin latautuessa
  useEffect(() => {
    recipeService.getAll().then(data => {
      setRecipes(data)
    })
  }, [])

  const handleDelete = (id) => {
    if (window.confirm('Haluatko varmasti poistaa tämän reseptin?')) {
      recipeService.deleteRecipe(id).then(() => {
        setRecipes(recipes.filter(recipe => recipe._id !== id))
      }).catch(error => {
        console.error('Error deleting recipe:', error)
        // Voit lisätä käyttäjälle ilmoituksen virheestä tässä
      })
    }
  }

  return (
    <div>
      <h2>Reseptit</h2>
      <ul>
        {recipes.map(recipe =>
          <li key={recipe._id}>
            {/* Linkki yksittäisen reseptin tarkastelusivulle */}
            <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
            {' '}
            <button onClick={() => handleDelete(recipe._id)} style={{ marginLeft: '10px', cursor: 'pointer', color: 'red', background: 'none', border: 'none', padding: '0' }}>
              X
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default RecipeList