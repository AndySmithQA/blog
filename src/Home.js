import { useState } from 'react';

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'My first blog', body: 'lorem', author: 'mario', id: 1},
    {title: 'My first blog', body: 'lorem', author: 'Yoshi', id: 2},
    {title: 'My Second blog', body: 'lorem', author: 'Mario', id: 3}
  ]);
  

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;