import React from 'react'
import Layouts from "../Layouts/Layouts"
import { useForm, Head } from '@inertiajs/react'


export default function Edit({post})  {
  const {data,setData,put,errors,processing}=useForm({body:post.body});

  function submit(e){
    e.preventDefault();
    put(`/posts/${post.id}`);
  }

  return (
    <>
      <Head title='Edit Post' />      
      <h1 className='title'>Update your post.</h1>

      <div className='w-1/2 mx-auto'>
        <form onSubmit={submit}>
            <textarea rows="10" 
                      id="" 
                      value={data.body} 
                      onChange={(e) => setData('body', e.target.value)}
                      className={errors.body && '!ring-red-500'}
            >
            </textarea>

            {errors.body && <p className='error'>{errors.body}</p>}
            <button className='primary-btn mt-4' disabled={processing}>Edit Post</button>
        </form>
      </div>
    </>
  )
}

Edit.layout=page => <Layouts children={page} title="Edit Post" />
