"use client";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "Login" | "Register";

const AuthForm = () => {
  const [ variant, setVariant ] = useState<Variant>('Login');
  const [isLoading, setLoading] = useState(false);

  const toggleVariant = useCallback(()=>{
    if(variant === 'Login'){
      setVariant('Register');
    }
    else{
      setVariant('Login');
    }
  },[variant]);

  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) =>{
    setLoading(true);

    if( variant === 'Login' ){
      //axios Register
    }
    if(variant === 'Register' ){
      //Nextauth Signin
    }
  }

  const socialAction = (action:string) =>{
    setLoading(true);
    //Nextauth Social Sign In
  }
  return (
    <div 
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input/>

        </form>
      </div>

    </div>
  )
}

export default AuthForm