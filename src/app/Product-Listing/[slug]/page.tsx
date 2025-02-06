import AllProductsListing from '@/app/components/all-products-listing/all-products-listing'
// import Filter from '@/app/components/Filter/filter'
import React from 'react'

interface props {
    params : Promise<{
        slug:string
    }>
  }

const Listing = async ({params}:props) => {
    const {slug} = await params
  return (
    <div>
        <AllProductsListing category={slug || "all items"}/>
    </div>
  )
}

export default Listing