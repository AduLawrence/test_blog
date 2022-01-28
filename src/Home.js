import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const name = "Lawrence";

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() =>{
    console.log('this is good');
  }, []);

  return (
    <div className="home">
      <h1>Welcome {name}</h1>
      <BlogList blogs = {blogs} handleDelete={ handleDelete }/>
      
    </div>
  );
  
};

export default Home;
