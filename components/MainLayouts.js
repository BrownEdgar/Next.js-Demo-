import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function MainLayouts({children}) {
  return (
	<>
		  <Head>
			  <title>Next Title </title>
		  </Head>
		<nav>
			<ul>
				<li>
					  <Link href="/"><a>Home</a></Link>
				</li>
				  <li>
					  <Link href="/about"><a>About</a></Link>
				  </li>
			</ul>
		</nav>
		<main>
			{children}
		</main>
		<style jsx>{`
			nav{
				position:fixed;
				left:0;
				top:0;
				background-color:#111;
				width:100%;
				right:0;
				height:100px;

			}
			ul {
				width:80%;
				display:flex;
				justify-content:space-around;
				align-items:center;
				list-style:none;
				height:100%;
			
				margin:0 auto;
			}
			a{
				color:#fff;
				text-decoration:none;
			}
			main {
				margin-top:100px;
				padding:1rem;
			}
		`}</style>
	</>
  )
}

export default MainLayouts