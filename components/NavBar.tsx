import Link from 'next/link'

export default function NavBar() {
  const user = null
  const username = null

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/'>
            <button className='btn-black'>FEED</button>  
          </Link>
        </li>
        {/* user is signed-in and has userName */}
        {username && (
          <>
            <li>
              <Link href='/admin'>
                <button className='btn-blue'>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} >
                <img src={user?.photoUrl} />
              </Link>
            </li>
          </>
        )}
        {/* user is NOT signed-in and has NOT created username */}
        {!username && (
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