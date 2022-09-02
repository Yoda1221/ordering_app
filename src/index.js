import React          from 'react'
import App            from './App'
import { store }      from './app/store'
import { Provider }   from 'react-redux'
import { createRoot } from 'react-dom/client'
import { extendUserApiSlice } from './features/users/usersSlice'
import { extendedApiSlice }   from './features/posts/postsSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate())
store.dispatch(extendUserApiSlice.endpoints.getUsers.initiate())

createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <Provider store={ store } >
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
