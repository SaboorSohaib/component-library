import { createContext, useContext, useState, useEffect } from "react";

type Direction = "ltr" | "rtl";

const LayoutDirectionContext = createContext<{
  direction: Direction;
  toggleDirection: () => void;
}>({
  direction: "ltr",
  toggleDirection: () => {},
});

export const LayoutDirectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [direction, setDirection] = useState<Direction>("ltr");

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  const toggleDirection = () => {
    setDirection((prev) => (prev === "ltr" ? "rtl" : "ltr"));
  };

  return (
    <LayoutDirectionContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </LayoutDirectionContext.Provider>
  );
};

export const useLayoutDirection = () => useContext(LayoutDirectionContext);
