import { useRouter } from "next/router"



export default function SpecialPost() {
	const router = useRouter();
	console.log(router);
  return (
	  <div>About {router.query.id}</div>
  )
}
