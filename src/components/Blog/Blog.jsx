const Blog = ({ blog }) => {
    const { cover, author_img, author, posted_date, reading_time, title, hashtags } = blog;
    console.log(blog)
    return (
        <div>
            <img className="w-full" src={cover} />
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
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    </span>

                </div>
            </div>
            <h3 className="font-bold text-[40px]">{title}</h3>
            <p className="text-gray-500">#{hashtags[0]}</p>
            <p className="underline text-purple-600 mb-8">Mark as read</p>
        </div>
    );
};

export default Blog;