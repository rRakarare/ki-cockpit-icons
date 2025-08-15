import { Brain } from "@/components/animate-ui/icons/brain";
import { Layers } from "@/components/animate-ui/icons/layers";
import { TypingText } from "@/components/animate-ui/text/typing";
import { useStatusState } from "./store";
import ShinyText from "@/components/animate-ui/text/shine";

export function MessageGenerationStatus() {
  const { status } = useStatusState();

  switch (status) {
    case "generatingDalleImage":
      return "generatingDalleImage";
    case "searchingBing":
      return "searchingBing";
    case "analyzingImages":
      return "analyzingImages";
    case "callingQdrant":
      return (
        <div className="flex items-center gap-2">
          <Layers animate animation="default-loop" loop loopDelay={1} />
          <TextTyper text="Calling Qdrant" />
        </div>
      );
    case "callingAssistant":
      return (
        <div className="flex gap-2">
          <Brain animate animation="path-loop" loop loopDelay={1} />
          <TextTyper text="Calling Assistant" />
        </div>
      );
    case "analyzingDocuments":
      return "analyzingDocuments";
    default:
      return null;
  }
}

const TextTyper = ({ text }: { text: string }) => {
  const { textType } = useStatusState();

  switch (textType) {
    case "shimmer":
      return <ShinyText text={text} disabled={false} speed={3} />;
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
