'use client'
import { useForm, SubmitHandler } from "react-hook-form"

import { Controller } from "react-hook-form"

import { Button,Callout } from "@radix-ui/themes";
import {Input} from "@nextui-org/react";
//import { Button } from '@nextui-org/react';
 import SimpleMDE from "react-simplemde-editor";
 import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";




type IssueForm = {
 title: string
  description: string
}


export default function App() {
 const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
  
  } = useForm <IssueForm>();

const  [error,setError]=useState('');

  return (
    <div className="max-w-xl">
     { error &&<Callout.Root color="red" className="mb-5">
  <Callout.Icon>
  </Callout.Icon>
  <Callout.Text>
  {error}
  </Callout.Text>
</Callout.Root>
}
    <form className=" space-y-3" onSubmit={handleSubmit( async (data)=>{

      try {
        
        await axios.post('/api/issues',data);
        router.push('/issues');
      } catch (error) {
       setError('An unexpected error occourred')
      }
     
    })}>
   
      <Input  type="text" placeholder="Enter your title" {...register('title')}/>

      
      <Controller
    name="description"
    control={control}
    render={({field})=><SimpleMDE placeholder="description"{...field}/>}
/>
      

      <Button type="submit"> submit new issue</Button>  
    </form>
    </div>
  )
}