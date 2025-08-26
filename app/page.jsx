import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='text-3xl'>
    I am Home page <br/>
    <Link href='/properties'>Properties</Link>
    </div>
    
  )
}

export default HomePage
