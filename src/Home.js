import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'My first blog', body: 'lorem', author: 'mario', id: 1},
    {title: 'My first blog', body: 'lorem', author: 'Yoshi', id: 2},
    {title: 'My Second blog', body: 'lorem', author: 'mario', id: 3}
  ]);

  const [name, setName] = useState('Mario');

  const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
  }
  
  useEffect(() => {
    console.log('Use effect Ran');
    console.log(blogs);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Luigi')}>Change name</button>
      <p>{ name }</p>
      
      </div>
      )
}
 
export default Home;