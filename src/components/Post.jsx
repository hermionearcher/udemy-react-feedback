import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'
import Button from './shared/Button'

function Post() {
  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello')
    navigate('/about')
  }
  return (
    <div>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hiya</h1>} />
      </Routes>
    </div>
  )
}

export default Post
