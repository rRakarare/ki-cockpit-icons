import React from "react";
import { statusOptions, useStatusActions } from "./store";
import { Button } from "@/components/ui/button";

function StatusSelect() {
  const { setStatus } = useStatusActions();

  return (
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
  );
}

export default StatusSelect;
