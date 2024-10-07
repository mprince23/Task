import React, { useEffect, useReducer, useContext, createContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const PostContext = createContext();

export const usePosts = () => {
  return useContext(PostContext);
};

const postReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return { ...state, posts: [...state.posts, ...action.payload] };
    case 'LIKE_POST':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload ? { ...post, likes: (post.likes || 0) + 1 } : post
        ),
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, comments: [...(post.comments || []), action.payload.comment] }
            : post
        ),
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { user: null });
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, { posts: [] });
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

const Feed = () => {
  const { state, dispatch } = usePosts();

  const fetchPosts = async (page) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
    const data = await response.json();
    dispatch({ type: 'LOAD_POSTS', payload: data });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      fetchPosts(Math.ceil(state.posts.length / 5) + 1);
    }
  };

  const handleLike = (postId) => {
    dispatch({ type: 'LIKE_POST', payload: postId });
  };

  const handleComment = (postId, comment) => {
    dispatch({ type: 'ADD_COMMENT', payload: { postId, comment } });
  };

  useEffect(() => {
    fetchPosts(1);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="feed">
      {state.posts.map((post) => (
        <div key={post.id} className="post card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <button className="btn btn-primary" onClick={() => handleLike(post.id)}>
              Like {post.likes || 0}
            </button>
            <div className="comments">
              <h6>Comments:</h6>
              {post.comments && post.comments.map((comment, index) => (
                <p key={index} className="comment">{comment}</p>
              ))}
              <input
                type="text"
                placeholder="Add a comment"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleComment(post.id, e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <PostProvider>
        <div className="container mt-4">
          <h1 className="text-center">Social Media Feed</h1>
          <Feed />
        </div>
      </PostProvider>
    </UserProvider>
  );
};

export default App;
