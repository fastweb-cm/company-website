import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { testblogposts } from '../utils/data';

function BlogDetails() {
  const { id } = useParams();
  const blog = testblogposts.find(item => item.id === Number(id));
  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-slate-800">Post not found</h2>
        <Link to="/blog" className="mt-4 text-red-600 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-red-50">
        <div
          className="relative h-[450px] flex items-end p-8 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(153, 27, 27, 0.9) 0%, rgba(0,0,0,0.2) 100%), url(${blog.img_url})`
          }}
        >
          <div className="relative z-10">
            <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight drop-shadow-md">
              {blog.title}
            </h1>
            <p className="text-red-100 mt-4 font-medium opacity-90">Published on {blog.date_posted}</p>
          </div>
        </div>
        <div className="p-8 md:p-16">
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 whitespace-pre-line">
            {blog.content}
          </p>

          <div className="mt-12 pt-8 border-t border-red-100 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-6">
              <button className="text-red-600 font-bold hover:text-red-800 transition-colors flex items-center gap-2">
                Share Article
              </button>
              <button className="text-slate-400 font-semibold hover:text-red-500 transition-colors">
                Save for Later
              </button>
            </div>
            <button
              onClick={() => window.history.back()}
              className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              ← Back to Feed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;