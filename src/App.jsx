import { Routes, Route }  from 'react-router-dom';
import Layout             from "./components/Layout"
import AddPost            from "./features/posts/AddPost"
import PostsList          from "./features/posts/PostsList"
import SinglePostPage     from "./features/posts/SinglePost"
import EditPost           from "./features/posts/EditPost"

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
      </Route>
    </Routes>
  )
}

export default App
