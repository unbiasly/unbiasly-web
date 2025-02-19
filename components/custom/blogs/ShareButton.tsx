"use client";
import { Share } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShareBlogPostIcon() {
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
    };  

    return (
        <Button variant="ghost" size="icon" onClick={handleCopyToClipboard}>
            <Share className="h-5 w-5" />
        </Button>
    );
}
