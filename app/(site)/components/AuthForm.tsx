"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs"
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
          {variant === "Register" && (
            <Input 
              id="email" 
              label="Email" 
              register={register}
              errors={errors}
              disabled={isLoading}
              />
          )}
          <Input 
              id="email" 
              label="Email"
              type="email"
              register={register}
              errors={errors}
              disabled={isLoading}
              />
              <Input 
              id="password" 
              label="Password"
              type="password" 
              register={register}
              errors={errors}
              disabled={isLoading}
              />
              <div>
                <Button
                  disabled={isLoading}
                  fullWidth
                  type="submit"
                >
                  {variant ==='Login' ? 'Sign In' : 'Register'}
                </Button>
              </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"/>
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className="bg-white px-2 text-gray-500"
              >
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton 
              icon={BsGithub}
              onClick={()=> socialAction('github')}
            />
            <AuthSocialButton 
              icon={BsGoogle}
              onClick={()=> socialAction('google')}
            />
          </div>
        </div>
        <div className="
          flex
          gap-2
          justify-center
          text-sm
          mt-6
          px-2
          text-gray-500
        ">
          <div>
            {variant ==="Login"?"New to Messenger?":"Already Have an Account?"}
          </div>
          <div className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === "Login" ? "Create an Account" : "Login" }
          </div>
        </div>
      </div>

    </div>
  )
}

export default AuthForm