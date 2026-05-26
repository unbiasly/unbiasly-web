"use client";

import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewsletterSubscribeResponse } from "@/service/api.interface";
import { handleResponse } from "@/service/fetchClient";
import { cn } from "@/lib/utils";

type FormData = { email: string };

const formSchema = z.object({
  email: z.string().email("Invalid email format").min(1),
});

type Props = {
  variant?: "light" | "dark";
};

const SubscribeForm = ({ variant = "light" }: Props) => {
  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const useSubscribe = useMutation({
    mutationFn: ({ email }: { email: string }) =>
      fetch("/subscribe/api", {
        method: "POST",
        body: JSON.stringify({ email }),
      }).then<NewsletterSubscribeResponse>(handleResponse),
  });

  const onSubmit = handleSubmit((data) => {
    useSubscribe.mutate(
      { email: data.email },
      {
        onSuccess: () => {
          toast.success("Subscribed. See you Sunday.");
          reset();
        },
        onError: () => toast.error("Something went wrong. Try again."),
      }
    );
  });

  const isDark = variant === "dark";

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="w-full">
        <div
          className={cn(
            "flex items-stretch w-full border transition-colors",
            isDark
              ? "border-paper/30 focus-within:border-accent"
              : "border-ink/20 focus-within:border-accent",
            "rounded-none"
          )}
        >
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            {...register("email")}
            className={cn(
              "flex-1 bg-transparent px-4 py-3.5 text-[15px] outline-none placeholder:opacity-50",
              isDark ? "text-paper placeholder:text-paper/40" : "text-ink placeholder:text-ink/40"
            )}
          />
          <button
            type="submit"
            disabled={useSubscribe.isPending}
            className={cn(
              "px-6 py-3.5 text-[12px] font-mono tracking-[0.15em] uppercase font-medium transition-colors disabled:opacity-50",
              isDark
                ? "bg-paper text-ink hover:bg-accent hover:text-paper"
                : "bg-ink text-paper hover:bg-accent"
            )}
          >
            {useSubscribe.isPending ? "..." : "Subscribe"}
          </button>
        </div>
        {formState.errors.email && (
          <div
            className={cn(
              "mt-2 text-[12px]",
              isDark ? "text-accent" : "text-accent-dark"
            )}
          >
            {formState.errors.email.message}
          </div>
        )}
      </form>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#0A0A0A",
            color: "#FAF7F2",
            border: "1px solid #E6481E",
            borderRadius: "0",
            fontSize: "13px",
            fontFamily: "var(--font-sans)",
          },
        }}
      />
    </div>
  );
};

export default SubscribeForm;
