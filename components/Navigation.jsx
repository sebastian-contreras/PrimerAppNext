import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <>
    <h2>Navigation</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
    </>
  )
}

export default Navigation