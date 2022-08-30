import Header     from './Header'
import { Outlet } from 'react-router-dom'

const Lajout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  )
}

export default Lajout
