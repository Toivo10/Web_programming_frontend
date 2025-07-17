// Tämä komponentti näyttää yksittäisen reseptin tarkat tiedot.
// Reseptin ID haetaan URL-parametrista, ja sillä haetaan data backendiltä.

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import recipeService from '../services/recipeService'

const RecipeDetail = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  // Haetaan yksittäinen resepti, kun komponentti ladataan
  useEffect(() => {
    recipeService.getOne(id).then(data => {
      setRecipe(data)
    })
  }, [id])

  if (!recipe) return <p>Ladataan...</p>

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p><strong>Ainekset:</strong> {recipe.ingredients}</p>
      <p><strong>Ohjeet:</strong> {recipe.instructions}</p>
    </div>
  )
}

export default RecipeDetail