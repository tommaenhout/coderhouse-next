"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchemaNewProduct as formSchema } from "@/utils/formSchemaNewProduct";
import Button from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { Input } from "./Input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "./Select";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { IProduct } from "@/constants/products";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useToast } from "@/hooks/useToast";


const createProduct = async (values : IProduct, file : File) => {
  const storageRef = ref(storage, `${values.id}`);
  const snapshot = await uploadBytes(storageRef, file);
  const fileUrl = await getDownloadURL(snapshot.ref);
  const docRef = doc(db, 'products', values.id.toString());
  return setDoc(docRef, { 
        ...values,
        image : fileUrl
      })
};


export function FormCreateProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      inStock: 0,
      price: 0,
      name: "",
      type: "",
      file: undefined
    },
  });

  const onSubmit = async (
    data: z.infer<typeof formSchema>,
    event?: React.BaseSyntheticEvent
  ) => {
    if (event) {
      setIsLoading(true);
      event.preventDefault();
      const {title,description,inStock,price,name,type, file} = data;
      let dataToSend : IProduct = {
        title,
        description,
        inStock,
        price,
        slug: `/${name}/${type}`,
        image : "",
        id : uuidv4(),
        type
      };
      await createProduct(dataToSend, file).
      then(( ) => {
        toast({
          title: "Product Created",
          description: "Product has been created successfully"
        })
      }).finally(() => {
      setIsLoading(false);
      form.reset();
    })
   
      }
    }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Product Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Product Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="inStock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="australian">australian</SelectItem>
                      <SelectItem value="shoes">shoes</SelectItem>
                      <SelectItem value="bomberjackets">
                        bomberjackets
                      </SelectItem>
                      <SelectItem value="thunderdome">thunderdome</SelectItem>
                      <SelectItem value="hardcore-top-100">
                        hardcore top 100
                      </SelectItem>
                      <SelectItem value="hardcore-classics">
                        hardcore classics
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select clothes or music" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="clothes">clothes</SelectItem>
                      <SelectItem value="music">music</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2 flex justify-center mt-5">
              <div className="w-4/5">
                <Button isLoading={isLoading} type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
