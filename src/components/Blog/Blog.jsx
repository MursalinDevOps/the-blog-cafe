const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, cover, author_img, author, posted_date, reading_time, title, hashtags } = blog;
    return (
        <div className="mx-3 md:mx-0">
            <a href="https://youtu.be/dQw4w9WgXcQ">
            <img className="w-full" src={cover} />
            </a>
            {/* Avatar and Icon */}
            <div className="flex justify-between items-center my-5">
                <div className="flex gap-3">
                    <img className="w-12 h-12 rounded-full" src={author_img} />
                    <div>
                        <p className="font-bold text-2xl">{author}</p>
                        <p className="font-semibold text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-4 text-gray-500">
                    <p>{reading_time} min read</p>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </button>

                </div>
            </div>
            <h3 className="font-bold text-[40px]">{title}</h3>
            <p className="text-gray-500">#{hashtags[0]}</p>
            <button
                onClick={() => handleMarkAsRead(reading_time, id)}
                className="underline text-purple-600 mb-8">Mark as read</button>
        </div>
    );
};

export default Blog;