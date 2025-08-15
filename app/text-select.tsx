import React from "react";
import { textTypeOptions, useStatusActions } from "./store";
import { Button } from "@/components/ui/button";

function TextSelect() {
  const { setTextType } = useStatusActions();

  return (
    <div className="flex gap-2">
      {textTypeOptions.map((val) => (
        <Button
          key={val || "null"}
          onClick={() => setTextType(val)}
          variant={"outline"}
          className=""
        >
          {val || "Clear"}
        </Button>
      ))}
    </div>
  );
}

export default TextSelect;
