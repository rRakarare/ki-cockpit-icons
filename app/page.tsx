"use client";

import StatusSelect from "./status-select";
import { MessageGenerationStatus } from "./message-generation-status";
import TextSelect from "./text-select";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <StatusSelect />
      <TextSelect />
      <div className="min-h-96 min-w-[500px] p-4 border mt-4 rounded-md shadow-md">
        <MessageGenerationStatus />
      </div>
    </div>
  );
}
