"use client";
import { useContext } from "react";
import Cards, { SingleCard } from "./components/Card";
import Hero from "./components/Hero";
import { ThemeContext } from "@/store/ThemeContext";

export default function Home() {
  const cards: SingleCard[] = [
    {
      id: 1,
      image:
        "https://ik.imagekit.io/gbfjo9pxy/car_1PWSrv01s.jpg?updatedAt=1727593349986",
      title: "Mountain View",
      description: "A stunning mountain landscape.",
      buttonText: "View",
    },
    {
      id: 2,
      image:
        "https://ik.imagekit.io/gbfjo9pxy/car_1PWSrv01s.jpg?updatedAt=1727593349986",
      title: "Green Hills",
      description: "Rolling green hills under a blue sky.",
      buttonText: "View",
    },
    {
      id: 3,
      image:
        "https://ik.imagekit.io/gbfjo9pxy/images_KilDbBKEQE.jpeg?updatedAt=1747063137864",
      title: "Desert Mirage",
      description: "Golden dunes in a peaceful desert.",
      buttonText: "View",
    },
    {
      id: 4,
      image:
        "https://ik.imagekit.io/gbfjo9pxy/images_KilDbBKEQE.jpeg?updatedAt=1747063137864",
      title: "Ocean Wave",
      description: "A big wave crashing onto the shore.",
      buttonText: "View",
    },
    {
      id: 5,
      image:
        "https://ik.imagekit.io/gbfjo9pxy/Hyundai-Creta_wo8qZ6iWr.jpg?updatedAt=1725806594280",
      title: "Sunset Peak",
      description: "A sunset behind a solitary mountain.",
      buttonText: "View",
    },
    {
      id: 6,
      image:
        "https://ik.imagekit.io/gbfjo9pxy/car1_a9cOuP55N.webp?updatedAt=1725806420588",
      title: "Dark Blocks",
      description: "A modern abstract UI style.",
      buttonText: "View",
    },
  ];
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-white text-gray-900"
      }`}
    >
      <Hero />
      <Cards cards={cards} />
    </div>
  );
}
