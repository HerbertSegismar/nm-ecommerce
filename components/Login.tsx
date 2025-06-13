import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <Link href="/login" className="hoverEffect hover:text-lightGreen hover:scale-105 group relative font-semibold font-inter">
        Login
    </Link>
  )
}

export default Login