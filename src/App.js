import React, { useState, createContext, useReducer, useEffect, useContext } from 'react';
import ReactHookForm from './Task/Formik-Form';
import FormikForm from './Task/React-hook-form';
import ReactDND from './Task/DND/ReactDND';
import Crud from './Task/Crud/Crud';
import Edit from './Task/Crud/Edit';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Map from './Task/Map';
import Chart from './Task/Chart';
import List1 from './Task/List1';
import Login from './Task/Login';
import FacebookOauth from './Task/FacebookOauth';
import AzureOauth from './Task/AzureOauth';
import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import Counter from './HookTask/Counter';
import FormInputHandling from './HookTask/FormInputHandling';
import LoginForm from './HookTask/LoginForm';
import Themes from './HookTask/Themes';
import ToDo from './HookTask/ToDo';
import FetchingData from './HookTask/FetchingData';
import PollingApi from './HookTask/PollingApi';
import CustomizableForm from './HookTask/CustomizableForm';
import A from './HookTask/useContext/A';
import DragAndDrop from './HookTask/Drag-and-Drop';
import Navbar from './HookTask/Navbar'
import HomePage from './HookTask/HomePage';
import Product from './HookTask/Product';
import ComplexTask from './HookTask/ComplexTask';
import SocialMedia from './HookTask/SocialMedia';
import Chat from './HookTask/Chat';
import DynamicTheme from './HookTask/DynamicTheme';
import GlobalState from './HookTask/GlobalState';
import QuizApplication from './HookTask/QuizApplication'
import MultiUser from './HookTask/Multi-User';
import TaskScheduling from './HookTask/TaskScheduling';
import Form1 from './Form/Form1';
import Form2 from './Form/Form2';
import Form3 from './Form/Form3';

const msalConfig = {
  auth: {
    clientId: "YOUR_AZURE_CLIENT_ID",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000",
  },
};

const pca = new PublicClientApplication(msalConfig);

export const notification = createContext()

export const CartContext = createContext();



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe' });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const ChatContext = createContext();

const chatReducer = (state, action) => {
  if (action.type === 'ADD_MESSAGE') {
    return [...state, action.payload];
  } else {
    return state;
  }
};


export const ChatProvider = ({ children }) => {
  const [messages, dispatch] = useReducer(chatReducer, []);
  return (
    <ChatContext.Provider value={{ messages, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};


export const ThemeContext = createContext();



export const BlogContext = createContext();






const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const id = new Date().getTime();
    setNotifications([...notifications, { id, message }]);
    setTimeout(() => {
      setNotifications((current) => current.filter((notif) => notif.id !== id));
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      <div className="notifications">
        {notifications.map((notif) => (
          <div key={notif.id} className="notification">
            {notif.message}
          </div>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);



const App = () => {

  function alertNotification() {
    alert("Hello")
  }

  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((acc, count) => acc + count, 0);
  };


  const [theme, setTheme] = useState('light');
  const [layout, setLayout] = useState('grid');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLayout = localStorage.getItem('layout');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedLayout) {
      setLayout(savedLayout);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('layout', layout);
  }, [theme, layout]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLayout = () => {
    setLayout((prev) => (prev === 'grid' ? 'list' : 'grid'));
  };




  const [posts, setPosts] = useState([]);

  const createPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, { ...post, id: Date.now() }]);
  };

  const updatePost = (id, updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? { ...post, ...updatedPost } : post))
    );
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <div>
      {/* ----- task 1 ---------- */}

      {/* <ReactHookForm />
      <FormikForm /> */}

      {/* -------task 2 --------- */}

      {/* <ReactDND /> */}

      {/* <ToastContainer />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/add-user" element={<Edit />} />
        <Route path="/edit-user/:id" element={<Edit />} />
      </Routes> */}

      {/* <Map /> */}

      {/* <Chart /> */}

      {/* <List1 /> */}

      {/* <Login /> */}
      {/* <FacebookOauth /> */}

      {/* <MsalProvider instance={pca}>
        <AzureOauth />
      </MsalProvider> */}


      {/* <Counter /> */}
      {/* <FormInputHandling /> */}
      {/* <LoginForm /> */}
      {/* <Themes /> */}
      {/* <ToDo /> */}
      {/* <FetchingData /> */}
      {/* <PollingApi /> */}


      {/* <CustomizableForm /> */}

      {/* <DragAndDrop /> */}
      {/* <ComplexTask /> */}

      {/* <CartContext.Provider value={{ cart, addToCart, getTotalItems }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </CartContext.Provider> */}

      {/* <SocialMedia /> */}

      {/* <QuizApplication /> */}

      {/* <NotificationProvider>
        <TaskScheduling />
      </NotificationProvider> */}

      {/* <MultiUser /> */}

      {/* <UserProvider>
        <ChatProvider>
          <div className="app">
            <Chat />
          </div>
        </ChatProvider>
      </UserProvider> */}

      {/* <notification.Provider value={alertNotification}>
        <A />
      </notification.Provider> */}

      {/* <ThemeContext.Provider value={{ theme, layout, toggleTheme, toggleLayout }}>
        <DynamicTheme />
      </ThemeContext.Provider> */}


      {/* <BlogContext.Provider value={{ posts, createPost, updatePost, deletePost }}>
        <GlobalState />
      </BlogContext.Provider> */}

      <ToastContainer />



      {/* Form */}

      {/* <Form1 /> */}
      {/* <Form2 /> */}
      <Form3 />


    </div>
  );
};

export default App;
