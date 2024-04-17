import React from 'react'
import Button from "@/components/global/Button";


type Props = {}

const pagination = (props: Props) => {
  return (
    <div className='flex justify-between'>
        <Button className='bg-white hover:bg-primary border border-gray-200'>
            Prev
        </Button>
        <Button className='bg-white hover:bg-primary border border-gray-200'>
            1
        </Button>
        <Button className='bg-white hover:bg-primary border border-gray-200'>
            2
        </Button>
        <Button className='bg-white hover:bg-primary border border-gray-200'>
            3
        </Button>
        <Button className='bg-white hover:bg-primary border border-gray-200'>
            Next
        </Button>
    </div>
  )
}

export default pagination