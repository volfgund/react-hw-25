import { Routes, Route } from 'react-router-dom';
import PostList from './Pages/PostList';
import Post from './Pages/Post';

const NotFound = () => (
  <div>
    <h2>404 - Page not found</h2>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;