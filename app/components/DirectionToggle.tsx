import { useLayoutDirection } from "@/store/LayoutDirectionContext";

const DirectionToggle = () => {
  const { direction, toggleDirection } = useLayoutDirection();
  console.log("🚀 ~ DirectionToggle ~ direction:", direction);

  return (
    <button
      className="border border-black p-2 cursor-pointer rounded-md"
      onClick={toggleDirection}
    >
      Switch to {direction === "ltr" ? "RTL (Arabic)" : "LTR (English)"}
    </button>
  );
};

export default DirectionToggle;
