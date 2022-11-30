import React from 'react';

const Blog = ({blog}) => {
    const {question,ans} = blog
    return (
        <div className=' p-5 max-w-[900px] shadow-xl'>
                <p className='p-3 bg-violet-700 text-xl  '>
                    {question}
                </p>
                <p>
                    {ans}
                </p>

        </div>
    );
};

export default Blog;
