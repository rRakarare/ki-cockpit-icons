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

export function MessageGenerationStatus() {
  const { status } = useStatusState();

  const iconClassName = "size-6";

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
            loop
          />
          <TextTyper text="Browsing the web" />
        </div>
      );
    case "analyzingImages":
      return "analyzingImages";
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
          <Kanban className={iconClassName} animate animation="default" loop />
          <TextTyper text="Analyzing Document" />
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
        <TextShimmer className="font-mono text-sm leading-loose" duration={1}>
          {text}
        </TextShimmer>
      );
      break;
    case "hCursor":
      return (
        <TypingText
          className="font-semibold"
          text={text}
          duration={20}
          cursor
        />
      );
      break;
    case "vCursor":
      return (
        <TypingText
          className="font-semibold"
          text={text}
          duration={20}
          cursor
        />
      );
      break;

    default:
      return null;
      break;
  }
};
