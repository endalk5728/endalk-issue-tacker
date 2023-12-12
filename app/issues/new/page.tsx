'use client'
import React from 'react'
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='max-w-xl space-y-3'>
    <Input  label="title"  labelPlacement="outside" type="text" placeholder="Enter your title" />
 <Textarea 
      isRequired
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
    
    />
<Button color="primary">
      <Link href='/issues/new'> Submit new Issue</Link>  
    </Button>
    </div>
  )
}

export default page