import React, { useContext, useState } from 'react';
import { BlogContext } from '../App';


const GlobalState = () => {
    const { createPost, posts, deletePost } = useContext(BlogContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div className="container col-md-5 mt-5">
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control mt-2"
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Add Post</button>
            </form>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">{post.title}</h3>
                            <p className="card-text">{post.content}</p>
                            <button className="btn btn-danger" onClick={() => deletePost(post.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlobalState