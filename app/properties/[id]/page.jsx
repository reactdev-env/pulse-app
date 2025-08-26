'use client'
import { useRouter,useParams, useSearchParams,usePathname } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log(router)
  return (
    <div>
    <h1>Property Page {params.id}</h1>
    <h1>Property Page {searchParams.get('name')}</h1>
    <h1>Property Page {pathname}</h1>

      <button onClick={() => router.replace('/')}>Go home</button>
    </div>
  )
}

export default PropertyPage;