"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    <form onSubmit={onSubmit}>
        <div className="flex items-center bg-transparent rounded-md lg:w-[462px] h-10 border-white border-2 overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email..."
            className="h-full text-white px-4 bg-[#1E1E1E] w-4/6 placeholder:text-white focus:outline-none"
            {...register("email")}
            aria-label="Subscriber email"
          />
          <button
            className="h-full text-black bg-[#D9D9D9] px-6 w-2/6 text-sm"
            type="submit"
            disabled={useSubscribe.isPending}
          >
            Join Us
          </button>
        </div>
    </form>
  );
};

export default SubscribeForm;
