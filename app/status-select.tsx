import React from "react";
import { statusOptions, useStatusActions, useStatusState } from "./store";
import { Button } from "@/components/ui/button";

function StatusSelect() {
  const { setStatus } = useStatusActions();
  const { status } = useStatusState();

  return (
    <div className="flex flex-wrap gap-2">
      {statusOptions.map((statusValue) => (
        <Button
          key={statusValue || "null"}
          onClick={() => setStatus(statusValue)}
          variant={"outline"}
          className={status === statusValue ? "bg-accent" : ""}
        >
          {statusValue || "Clear"}
        </Button>
      ))}
    </div>
  );
}

export default StatusSelect;
