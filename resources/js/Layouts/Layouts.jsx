import {Link,Head} from '@inertiajs/react'

const Layouts = ({children,title}) => {
  return (
    <>
      <Head>
        <meta head-key='description' name='description'  content='This is default description.'/>
      </Head>
      <header>
        {/* <title>{title}</title> */}
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
