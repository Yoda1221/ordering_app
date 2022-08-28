import React          from 'react'
import App            from './App'
import { store }      from './app/store'
import { Provider }   from 'react-redux'
import { createRoot } from 'react-dom/client'
import { fetchUsers } from './features/users/usersSlice'

import './index.css'

store.dispatch(fetchUsers())

createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>
  </React.StrictMode>
)
