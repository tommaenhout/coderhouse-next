"use client";


import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Modal";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useAuthContext } from "./context/AuthContext";
 
import  Button  from "@/components/Button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form"
import { Input } from "@/components/Input"
import { useState } from "react";
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password : z.string().min(6, {
    message: "Password must be at least 6 characters.",
  })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
  .regex(/[0-9]/, { message: "Password must contain at least one number." })
  .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." })
})



interface ILoginModal {
    open: boolean;

}

const LoginModal : React.FC<ILoginModal> = ({open}) => {
    const { registerUser, loginUser, googleLogin } = useAuthContext();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      });

      const onSubmit = async (
        data: z.infer<typeof formSchema>,
        isRegister: boolean,
      ) => {
         isRegister ? 
         registerUser({ email: data.username, password: data.password }) : 
         loginUser({ email: data.username, password: data.password });
      }


  return (
    <Dialog
      open={open}
      modal
  
    >
      <DialogContent  showCross = {false} className="bg-white sm:w-2/5 w-full">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
                  
                  placeholder="write your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="password" placeholder="write your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
              onClick={() => form.handleSubmit((data,event) => onSubmit(data, false))()}
              type="button"
            >
              Login
            </Button>

            <Button
              onClick={googleLogin}
              type="button"
            > 
              Google Login
            </Button>
        <Button
              onClick={() => form.handleSubmit((data,event) => onSubmit(data, true))()} 
              type="button"
            >
              Register
            </Button>
        
      </form>
    </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;