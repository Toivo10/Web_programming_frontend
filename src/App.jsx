// App.jsx toimii reitityksen keskuskomponenttina
// Määrittää eri näkymät eri URL-poluille ja näyttää navigaation.

import { Routes, Route, Link } from 'react-router-dom'

// Pääkomponentit
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'
import RecipeDetail from './components/RecipeDetail'

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      {/* Yläpalkki, joka toimii navigointina */}
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Etusivu</Link>
        <Link to="/add">Lisää resepti</Link>
      </nav>

      {/* Reititys */}
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<RecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  )
}

export default App