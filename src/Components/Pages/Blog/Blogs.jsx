import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`https://learn-digital-naffiziqbal.vercel.app/blog`)
        .then(res => setData(res.data))
    },[])
    return (
        <div className=''>
           <h3 className='my-5
           text-4xl font-bold text-center'> Welcome to Blog Page</h3>

           <div className=' flex justify-center items-center flex-col '>
            {
                data.map(blog => <Blog
                blog={blog}
                key ={blog.id}
                />)
            }
           </div>
        </div>
    );
};

export default Blogs;
