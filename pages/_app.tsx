import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '../lib/context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{user: {}, userName: 'ahtz'}}>
        <NavBar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  )
}

export default MyApp
