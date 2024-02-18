"use client";

import zod from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";

interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}

const formSchema = zod.object({
  title: zod.string().min(1, { message: "Title is required" }),
});

export const TitleForm = ({ courseId, initialData }: TitleFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: zod.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="mt-6 border bg-slate-100  rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Title
        <Button variant="ghost" onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Title
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
