import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = ({blog}) => {
    useTitle('Blog')
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
