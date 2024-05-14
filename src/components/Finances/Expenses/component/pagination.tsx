import React from 'react'
import Button from "@/components/global/Button";


type Props = {}

const pagination = (props: Props) => {
  return (
    <div className='flex justify-between gap-2'>
        <Button className='bg-white hover:bg-primary hover:text-white text-gray-300 border border-gray-200'>
            Prev
        </Button>
        <Button className=' bg-primary border border-gray-200 text-white'>
            1
        </Button>
        <Button className='bg-white hover:bg-primary border border-gray-200  hover:text-white text-primary'>
            2
        </Button>
        <Button className='bg-white hover:bg-primary border border-gray-200  hover:text-white text-primary'>
            3
        </Button>
        <Button className='bg-white hover:bg-primary border border-gray-200  hover:text-white text-primary '>
            Next
        </Button>
    </div>
  )
}

export default pagination