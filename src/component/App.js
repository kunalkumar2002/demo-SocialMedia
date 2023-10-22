import { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Home, Login, Page404 } from '../pages';
import { Loder, Navbar } from './';
import { Route, Routes } from 'react-router-dom';

const About = () => {
  return <h1>About</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPosts();
      console.log(response);
      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoding(false);
    };

    fetchPost();
  }, []);

  if (loding) {
    return <Loder />;
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
