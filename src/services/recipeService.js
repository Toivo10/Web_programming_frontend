// Moduuli vastaa frontendin ja backendin välisistä HTTP-kutsuista resepteihin liittyen.
import axios from 'axios'

// API:n perusosoite
const baseUrl = 'http://localhost:3001/recipes'

// Hakee kaikki reseptit backendistä (GET /recipes)

const getAll = () => axios.get(baseUrl).then(res => res.data)

// Luo uuden reseptin backendin tietokantaan (POST /recipes)
const create = newRecipe => axios.post(baseUrl, newRecipe).then(res => res.data)

// Hakee yhden reseptin backendistä ID:n perusteella (GET /recipes/:id)
const getOne = id => axios.get(`${baseUrl}/${id}`).then(res => res.data)

// Poistaa reseptin backendistä ID:n perusteella (DELETE /recipes/:id)
const deleteRecipe = id => axios.delete(`${baseUrl}/${id}`).then(res => res.data)

export default { getAll, create, getOne, deleteRecipe }