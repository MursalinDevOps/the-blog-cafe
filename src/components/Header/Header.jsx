import profile from '../../assets/images/profile.png'

export default function Header() {
  return (
    <div>
        <header>
        <nav className='flex justify-between items-center border-b-2 px-4 py-2'>
        <h1 className='text-3xl font-bold'>The Blog  Cafe</h1>
        <a href="https://youtu.be/dQw4w9WgXcQ">
        <img src={profile} alt="" />
        </a>
        </nav>
      </header>
    </div>
  )
}
