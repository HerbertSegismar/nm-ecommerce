'use client'
import { useEffect, useState } from 'react'
import HometabBar from './HometabBar'
import { productType } from '@/constants/NavData'
import { client } from '@/sanity/lib/client'
import { AnimatePresence, motion } from 'motion/react'
import { Loader2 } from 'lucide-react'
import NoProductsAvailable from './NoProductsAvailable'
import ProductCard from './ProductCard'

type Product = {
    _id: string;
    // Add other product properties as needed
    [key: string]: any;
};

const ProductGrid = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [selectedTab, setSelectedTab] = useState(productType[0].name || "")

    const query = `*[_type == "product" && variant == $variant] | order(name desc){
    ..., "categories": categories[]->name }`;

    const params = {
        variant: selectedTab.toLowerCase()
    }

    useEffect(()=> {
      const fetchdata = async () => {
        setLoading(true)
        try {
          const response = await client.fetch(query, params) 
          setProducts(response) 
        } catch (error) {
          console.error("Product fetch error:", error)
        } finally {
          setLoading(false)
        }
      }
      fetchdata()
    }, [selectedTab])

  return (
    <div className='py-10'>
        <HometabBar selectedTab={selectedTab} onTabSelect={setSelectedTab}/>
        {loading? (
          <div className='flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10'>
            <div className='space-x-2 flex items-center text-blue-600'>
              <Loader2 className='w-5 h-6 animate-spin'/>
              <span>Loading Products</span>
            </div> 
          </div>
        ) : products?.length? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10'>
            {products?.map((product) => (
                <AnimatePresence key={product?._id}>
                  <motion.div>
                    <ProductCard/>
                  </motion.div>
                </AnimatePresence>
            ))}
          </div>
        ) : (
          <NoProductsAvailable selectedTab={selectedTab}/>
        )}
    </div>
  )
}

export default ProductGrid