import { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Home } from '../pages';
import { Loder, Navbar } from './';

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
      <Home posts={posts} />
    </div>
  );
}

export default App;
