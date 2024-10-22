import Bookmark from "../../Bookmark/Bookmark"

export default function Bookmarks( {bookmarks} ) {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3">
            <div className="py-5 w-full text-center text-purple-600 border border-purple-700 rounded-lg mx-3 text-[20px] font-bold bg-purple-100">
            <p>Spent time on read: <span> </span> </p>
            </div>

            <div className="bg-[#1111110D] mt-4 rounded-lg mx-3 py-5 w-full">
                <div className="px-3">
                <h3 className="text-[20px] my-4 font-bold">
                    Bookmarked Blogs: {bookmarks.length}
                </h3>
               <div className="">
               {
                bookmarks.map(bookmark =><Bookmark 
                    bookmark={bookmark}></Bookmark>)
            }
               </div>
                </div>
            </div>
        </div>
    )
}
