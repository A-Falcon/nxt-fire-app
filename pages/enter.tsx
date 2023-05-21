import {auth, googleAuthProvider} from '../lib/firebase'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

export default function EnterPage(props) {
  const {user, userName} = useContext(UserContext)
  // const user = null
  // const userName = null
  return (
    <main>
      { user ?
      !userName ? <UserNameForm /> : <SignOutButton /> 
      :
      <SignInButton />
       }
    </main>
  )
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider)
  }
    return (
      <button className="btn-google" onClick={signInWithGoogle} >
        <img src={'/google.png'} /> Sign in with Google
      </button>
    )
}

function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function UserNameForm() {
  return (
    <h1>hihi</h1>
  )
}