import { create } from "zustand";
import { useShallow } from "zustand/shallow";

export const statusOptions = [
  "generatingDalleImage",
  "searchingBing",
  "analyzingImages",
  "callingQdrant",
  "callingAssistant",
  "analyzingDocuments",
  null,
] as const;
export const textTypeOptions = ["shimmer", "vCursor", "hCursor"] as const;

export type StatusType = (typeof statusOptions)[number];
export type TextType = (typeof textTypeOptions)[number];

interface State {
  status: StatusType;
  textType: TextType;

  actions: {
    setStatus: (textType: StatusType) => void;
    setTextType: (textType: TextType) => void;
  };
}

const initialState: Omit<State, "actions"> = {
  status: null,
  textType: "shimmer",
};

const useStore = create<State>()((set, get) => ({
  ...initialState,

  actions: {
    setStatus: (val) => set({ status: val }),
    setTextType: (val) => set({ textType: val }),
  },
}));

export const useStatusState = () =>
  useStore(
    useShallow((state) => ({
      status: state.status,
      textType: state.textType,
    }))
  );

export const useStatusActions = () => useStore((state) => state.actions);
