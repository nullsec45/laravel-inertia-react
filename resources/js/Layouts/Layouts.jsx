import {Link} from '@inertiajs/react'

const Layouts = ({children,title}) => {
  return (
    <>
      <header>
        <title>{title}</title>
        <nav>
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/posts/create">Create</Link>
        </nav>
      </header>

      <main>
        {children}
      </main>
    </>
  )
}

export default Layouts
