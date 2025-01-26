import Layouts from "../Layouts/Layouts"
import { useForm } from '@inertiajs/react'


export default function Show({post}){
    const {delete:destroy}=useForm();

    function submit(e){
        e.preventDefault();
        destroy(route('posts.destroy',post));
    }

    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Posted on :</span>
                    <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
                <p className="font-medium">{post.body}</p>
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

Show.layout=page => <Layouts children={page} title="Show Post" />
