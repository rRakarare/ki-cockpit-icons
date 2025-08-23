import { Brain } from "@/components/animate-ui/icons/brain";
import { Layers } from "@/components/animate-ui/icons/layers";
import { TypingText } from "@/components/animate-ui/text/typing";
import { useStatusState } from "./store";
import ShinyText from "@/components/animate-ui/text/shine";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Brush } from "@/components/animate-ui/icons/brush";
import { Bot } from "@/components/animate-ui/icons/bot";
import { Globe } from "@/components/animate-ui/icons/globe";
import { GlobeNew } from "@/components/animate-ui/icons/globe-new";
import { Kanban } from "@/components/animate-ui/icons/kanban";
import { Eye } from "@/components/animate-ui/icons/eye";
import { Scroll } from "@/components/animate-ui/icons/scroll";
import { Bulb } from "@/components/animate-ui/icons/bulb";

export function MessageGenerationStatus() {
  const { status } = useStatusState();

  const iconClassName = "size-6 stroke-[2px] stroke-[#3A3A3A]";

  switch (status) {
    case "generatingDalleImage":
      return (
        <div className="flex items-center gap-2">
          <Brush
            className={iconClassName}
            animate
            animation="default"
            loop
            loopDelay={1}
          />
          <TextTyper text="Generating image" />
        </div>
      );
    case "searchingBing":
      return (
        <div className="flex items-center gap-2">
          <GlobeNew
            className={iconClassName}
            animate
            animation="default"
            loopDelay={1}
            loop
          />
          <TextTyper text="Browsing the web" />
        </div>
      );
    case "analyzingImages":
      return (
        <div className="flex items-center gap-2">
          <Eye
            className={iconClassName}
            animate
            animation="default"
            loop
            loopDelay={1}
          />
          <TextTyper text="Analyzing image" />
        </div>
      );
    case "callingQdrant":
      return (
        <div className="flex items-center gap-2">
          <Layers
            className={iconClassName}
            animate
            animation="default-loop"
            loop
            loopDelay={1}
          />
          <TextTyper text="Calling Qdrant" />
        </div>
      );
    case "callingAssistant":
      return (
        <div className="flex gap-2">
          <Bot
            className={iconClassName}
            animate
            animation="blink"
            loop
            loopDelay={1}
          />
          <TextTyper text="Calling Assistant" />
        </div>
      );
    case "analyzingDocuments":
      return (
        <div className="flex gap-2">
          <Scroll
            className={iconClassName}
            animate
            animation="default"
            loop
            loopDelay={1}
          />
          <TextTyper text="Analyzing Document" />
        </div>
      );
    case "thinking":
      return (
        <div className="flex gap-2">
          <Bulb
            className={iconClassName}
            animate
            animation="default"
            loop
            loopDelay={1}
          />
          <TextTyper text="Thinking" />
        </div>
      );
    default:
      return null;
  }
}

const TextTyper = ({ text }: { text: string }) => {
  const { textType } = useStatusState();

  switch (textType) {
    case "shimmer":
      return (
        <TextShimmer
          className="font-semibold text-sm font-mono leading-7"
          duration={1}
        >
          {text}
        </TextShimmer>
      );
      break;
    case "hCursor":
      return (
        <TypingText
          className="font-semibold text-sm font-mono leading-7"
          text={text}
          duration={40}
          cursor
          cursorClassName="w-[9px] h-1 mb-[1px] ml-[1px]"
        />
      );
      break;
    case "vCursor":
      return (
        <TypingText
          className="font-semibold text-sm font-mono leading-7"
          text={text}
          duration={40}
          cursor
          cursorClassName="w-[2px] h-4 mb-[1px] ml-[1px]"
        />
      );
      break;

    default:
      return null;
      break;
  }
};
