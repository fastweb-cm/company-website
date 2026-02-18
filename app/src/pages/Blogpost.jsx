import React from 'react'
import Navbar from '../components/Navbar'
import { testblogposts } from '../utils/data'
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Blogpost() {

    const featured = testblogposts.find(blod => blod.featured === true);
    return (
        <div className='relative mt-15 sm:mx-[8em]'>
            <div className="blogs">
                {/* <div className="search flex flex-row w-fit border rounded-lg shadow-lg center">
                    <input type="text" className='w-[60vw]' /><Button>Search</Button>
                </div> */}
                <h1 className=''>Featured Blog</h1>
                <div
                    className="featured my-10 bg-cover bg-center min-h-[30vh] flex justify-center flex-col p-5 rounded-lg"
                    style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${featured.img_url})` }}
                >
                    <h3 className='text-primary mt-3'>{featured.category}</h3>
                    <h2 className='mt-4'>{featured.title}</h2>
                    <p className='text-muted line-clamp-3 mt-3 max-w-[50%]'>{featured.content}</p>
                    <div className="actions flex justify-between max-w-[50%]">
                        <div className="date">{featured.date_posted}</div>
                        <Link to={`/blog/${featured.id}`}><Button className='hover:text-text'>Read More...</Button></Link>
                    </div>
                </div>
                <div className="allblogs">
                    <div className="titlebar flex justify-between">
                        <h1>Top Stories</h1>
                        <div className="line"></div>
                        <button className='text-primary p-2'>View more</button>
                    </div>
<div className="blog flex flex-wrap gap-6 w-full justify-start items-stretch">
    {
        testblogposts.map((blog) =>
            <div key={blog.id} className='flex shadow-lg min-w-[300px] sm:flex-1 sm:basis-[calc(33.333%-1.5rem)] flex-col cursor-pointer hover:bg-slate-200 rounded-lg overflow-hidden'>
                <img src={`${blog.img_url}`} alt="" className='w-full object-cover h-[200px]' />
                
                <div className="desc p-4 flex flex-col flex-grow">
                    <h3 className='text-primary font-semibold text-sm uppercase'>{blog.category}</h3>
                    <h2 className='mt-2 text-xl font-bold leading-tight'>{blog.title}</h2>
                    <p className='text-muted line-clamp-3 mt-3 text-sm flex-grow'>{blog.content}</p>
                    
                    <div className="actions flex justify-between items-center mt-6 pt-4 border-t border-slate-100">
                        <div className="date text-xs text-slate-500">{blog.date_posted}</div>
                        <Link to={`/blog/${blog.id}`}><Button className='text-primary hover:text-text font-medium hover:underline'>Read More...</Button></Link>
                    </div>
                </div>
            </div>
        )
    }
</div>
                </div>
            </div>
        </div>
    )
}

export default Blogpost