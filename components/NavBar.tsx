import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

export default function NavBar() {
  //set these to null!
const {user, userName} = useContext(UserContext)

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/'>
            <button className='btn-logo'>FEED</button>  
          </Link>
        </li>

        {/* user is signed-in and has userName */}
        {userName && (
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <li>
              <Link href='/admin'>
                <button className='btn-blue'>Write Posts</button>
              </Link>
            </li>
              <Link href={`/${userName}`} >
                <img src={user?.photoURL} />
              </Link>
          </div>
        )}

        {/* user is NOT signed-in and has NOT created userName */}
        {!userName && (
          <li>
            <Link href='/enter'>
              <button className='btn-blue'>Log In</button>
            </Link>
          </li>
          )}      
      </ul>    
    </nav>
  )
}