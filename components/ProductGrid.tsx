'use client'
import { useState } from 'react'
import HometabBar from './HometabBar'

const ProductGrid = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedTab, setSelectedTab] = useState("")
  return (
    <div className='py-10'>
        <HometabBar />
    </div>
  )
}

export default ProductGrid