import Link from "next/link";
import Router from "next/router";
import Head from 'next/head'
import MainLayouts from "../components/MainLayouts";

export default function Home() {
  return (
	  <MainLayouts>
	
		  <div>
			  <h1>
				  Hello next.js
			  </h1>
			  <p><Link href={"/about"}><a>About</a></Link></p>
			  <p><Link href={"/about/45"}><a>About/45</a></Link></p>
			  <button onClick={() => Router.push("/about")}>Router with button</button>
		  </div>
	  </MainLayouts>
		
    

  )
}