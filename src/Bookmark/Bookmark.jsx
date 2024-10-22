export default function Bookmark( {bookmark} ) {
    const {title} = bookmark;
  return (
    <div>
      <div className=" bg-white px-2 py-2 mb-4 rounded-lg">
        <h2 className="text-xl font-bold">
        {title}
        </h2>
      </div>
    </div>
  )
}

