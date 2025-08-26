'use client'
import { useRouter,useParams } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  console.log(router)
  return (
    <div>
    <h1>Property Page {params.id}</h1>
      <button onClick={() => router.replace('/')}>Go home</button>
    </div>
  )
}

export default PropertyPage;