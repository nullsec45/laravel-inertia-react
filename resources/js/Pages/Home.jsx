import Layouts from "../Layouts/Layouts"

export default function Home({posts}){
  console.log(posts);
  return (
    <>
      <h1 className="title">Hello {name}</h1>
      <div>
        {posts.map(post => (
            <div key={post.id} className="p-4 border-b">
              <div>
                <span>Posted on :</span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
              </div>
              <p className="font-me">{post.body}</p>
            </div>
        ))}
      </div>
      <a href="/" className="block title ">{new Date().toLocaleTimeString()}</a>
    </>
  )
}

Home.layout=page => <Layouts children={page} title="welcome" />