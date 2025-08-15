"use client";

import { useState } from "react";
import { MessageGenerationStatus } from "./message-generation-status";
import { Button } from "@/components/ui/button";

const statusOptions = [
  "generatingDalleImage",
  "searchingBing",
  "analyzingImages",
  "callingQdrant",
  "callingAssistant",
  "analyzingDocuments",
  null,
] as const;

type StatusContent = (typeof statusOptions)[number];

function MessageGenDemo() {
  const [status, setStatus] = useState<StatusContent>(null);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="min-h-96 flex flex-col items-center gap-5">
        <div className="flex gap-2">
          {statusOptions.map((statusValue) => (
            <Button
              key={statusValue || "null"}
              onClick={() => setStatus(statusValue)}
              variant={"outline"}
              className=""
            >
              {statusValue || "Clear"}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessageGenDemo;
