'use client'
import { useRouter,useParams, useSearchParams } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  console.log(router)
  return (
    <div>
    <h1>Property Page {params.id}</h1>
    <h1>Property Page {searchParams.get('name')}</h1>

      <button onClick={() => router.replace('/')}>Go home</button>
    </div>
  )
}

export default PropertyPage;