"use client";

import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AppApi from "@/service/app.api";
import { NewsletterSubscribeResponse } from "@/service/api.interface";
import { handleResponse } from "@/service/fetchClient";

type FormData = {
  email: string;
};

const formSchema = z.object({
  email: z.string().email("Invalid email format").min(1),
});

const SubscribeForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const useSubscribe = useMutation({
    mutationFn: ({ email }: { email: string }) => {
      return fetch("/subscribe/api", {
        method: "POST",
        body: JSON.stringify({ email }),
      }).then<NewsletterSubscribeResponse>(handleResponse);
    },
  });

  const onSubmit = handleSubmit((data) => {
    useSubscribe.mutate(
      {
        email: data.email,
      },
      {
        onSuccess: () => {
          toast.success("Subscribed successfully");
          reset();
        },
        onError: () => {
          toast.error("Failed to subscribe");
        },
      }
    );
  });
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="flex justify-center items-center bg-transparent rounded-md lg:w-[462px] h-10 mt-4 border-white border-2">
          <input
            type="email"
            placeholder="Email ID"
            className="flex-grow p-2 pl-4 rounded-l-md outline-none text-white bg-transparent placeholder:text-white"
            {...register("email")}
          />
          <button
            className="text-white bg-transparent rounded-r-md mr-6"
            type="submit"
            disabled={useSubscribe.isPending}
          >
            Subscribe
          </button>
        </div>
      </form>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default SubscribeForm;
