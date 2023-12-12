import React from 'react'
import {Button} from "@nextui-org/react";
import Link from 'next/link';

const page = () => {
  return (
    <div>
     <Button color="primary">
      <Link href='/issues/new'> new Issue</Link>  
    </Button>

    </div>
  )
}

export default page