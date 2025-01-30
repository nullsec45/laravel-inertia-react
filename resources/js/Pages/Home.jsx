import { Link, usePage, Head } from "@inertiajs/react"
import Layouts from "../Layouts/Layouts"
import { useState } from "react";

export default function Home({posts}){
  const {flash}=usePage().props;
  const {component}=usePage();

  const [flashMsg,setFlashMsg]=useState(flash.message);
  const [flashSuccess,setFlashSuccess]=useState(flash.success);


  setTimeout(() => {
    setFlashSuccess(null);
  }, 2000);
  return (
    <>
      <Head title={component} />
      <h1 className="title">Hello </h1>
      {flashMsg && (
        <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsg}</div>
      )}

       {flashSuccess && (
        <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">{flashSuccess}</div>
      )}
      
      <div>
        {posts.data.map(post => (
            <div key={post.id} className="p-4 border-b">
              <div>
                <span>Posted on :</span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
              </div>
              <p className="font-me">{post.body}</p>
              <Link className="text-link" href={route('posts.show',post)}>Read More...</Link>
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

Home.layout=page => <Layouts children={page} title='Home'/>