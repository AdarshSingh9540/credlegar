// components/PublishButton.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PublishButtonProps {
  userId: number;
  profileExists: boolean;
}

export default function PublishButton({
  userId,
  profileExists,
}: PublishButtonProps) {
  const [isPublishing, setIsPublishing] = useState(false);
  const router = useRouter();

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const response = await fetch("/api/publish-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        router.refresh();
        router.push(`/${userId}`);
      } else {
        throw new Error("Failed to publish profile");
      }
    } catch (error) {
      console.error("Error publishing profile:", error);
      alert("Failed to publish profile. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  if (profileExists) {
    return (
      <Link
        href={`/${userId}`}
        className="bg-green-500 hover:bg-green-700 mt-3 mr-5 text-white font-bold py-2 px-4 rounded inline-block"
      >
        View Public Profile
      </Link>
    );
  }

  return (
    <button
      onClick={handlePublish}
      disabled={isPublishing}
      className="bg-blue-500 hover:bg-blue-700 mt-3 mr-5 text-white font-bold py-2 px-4 rounded"
    >
      {isPublishing ? "Publishing..." : "Publish Profile"}
    </button>
  );
}
