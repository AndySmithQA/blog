import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'My first blog', body: 'lorem', author: 'mario', id: 1},
    {title: 'My first blog', body: 'lorem', author: 'Yoshi', id: 2},
    {title: 'My Second blog', body: 'lorem', author: 'Mario', id: 3}
  ]);
  

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      </div>
      )
}
 
export default Home;