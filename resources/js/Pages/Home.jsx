import { Link } from "@inertiajs/react"
import Layouts from "../Layouts/Layouts"

export default function Home({posts}){
  return (
    <>
      <h1 className="title">Hello </h1>
      
      <div>
        {posts.data.map(post => (
            <div key={post.id} className="p-4 border-b">
              <div>
                <span>Posted on :</span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
              </div>
              <p className="font-me">{post.body}</p>
            </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        {
          posts.links.map(link => link.url ? 
            (
              <Link key={link.label} 
                    href={link.url}
                    dangerouslySetInnerHTML={{__html:link.label}}
                    className={`p-1 mx-1 ${link.active ? "text-blue-500" : ""}`}
              />
            )
            : 
            (
              <span key={link.label}
                    dangerouslySetInnerHTML={{__html:link.label}}
                    className={`p-1 mx-1 text-slate-300`}>

              </span>
            )
          )
        }
      </div>
      <a href="/" className="block title ">{new Date().toLocaleTimeString()}</a>
    </>
  )
}

Home.layout=page => <Layouts children={page} title="Home" />