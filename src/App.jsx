import Layout             from "./components/Layout"
import AddPost            from "./features/posts/AddPost"
import EditPost           from "./features/posts/EditPost"
import UserPage           from './features/users/UserPage'
import UsersList          from "./features/users/UsersList"
import PostsList          from "./features/posts/PostsList"
import SinglePostPage     from "./features/posts/SinglePost"
import { Navigate, Routes, Route }  from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        
        <Route index element={ <PostsList /> } />

        <Route path="post" >
          <Route index element={ <AddPost /> } />
          <Route path=":postId" element={ <SinglePostPage /> } />
          <Route path="edit/:postId" element={ <EditPost /> } />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  )
}

export default App
