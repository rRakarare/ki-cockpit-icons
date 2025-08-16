import React from "react";
import { textTypeOptions, useStatusActions, useStatusState } from "./store";
import { Button } from "@/components/ui/button";

function TextSelect() {
  const { setTextType } = useStatusActions();

  const { textType } = useStatusState();

  return (
    <div className="flex flex-wrap gap-2">
      {textTypeOptions.map((val) => (
        <Button
          key={val || "null"}
          onClick={() => setTextType(val)}
          variant={"outline"}
          className={textType === val ? "bg-accent" : ""}
        >
          {val || "Clear"}
        </Button>
      ))}
    </div>
  );
}

export default TextSelect;
