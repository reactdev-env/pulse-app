'use client'
import { useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  console.log(router)
  return (
    <div>
    <h1>He I am the nth number of properties</h1>
      <button onClick={() => router.replace('/')}>Go home</button>
    </div>
  )
}

export default PropertyPage;