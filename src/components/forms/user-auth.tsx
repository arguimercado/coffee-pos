"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { FormControl, FormField,Form, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { ConvertAuthLabel } from "@/lib/utils";
import {z} from "zod";

interface AuthFormProps<T extends FieldValues> {
   schema: z.ZodType<T>;
   defaultValues: T;
   formType: "SIGN_IN" | "SIGN_UP";
   onSubmit: (data: T) => Promise<ActionResponse>;
}

const UserAuth = <T extends FieldValues>({
   schema,
   defaultValues,
   formType,
   onSubmit,
}: AuthFormProps<T>) => {
   const router = useRouter();

   const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: defaultValues as DefaultValues<T>,
   });

   const handleSubmit : SubmitHandler<T> = async (data) => {
      const result = await onSubmit(data) as ActionResponse;
      if(result.success) {
         router.push("/");
      }
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-4"
         >
            {Object.keys(defaultValues).map((field) => (
               <FormField
               key={field}
               control={form.control}
               name={field as Path<T>}
               render={({ field }) => (
                 <FormItem className="flex w-full flex-col gap-2.5">
                   <FormLabel className="paragraph-medium text-dark400_light700">
                     {ConvertAuthLabel(field.name)}
                   </FormLabel>
                   <FormControl>
                     <Input
                       required
                       type={field.name === "password" ? "password" : "text"}
                       placeholder={`Enter  ${ConvertAuthLabel(field.name)}`}
                       className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
            />
            ))}
         </form>
      </Form>

   );
};

export default UserAuth;
