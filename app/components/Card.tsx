"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/store/ThemeContext";

export interface SingleCard {
  id: number;
  title: string;
  image: string;
  description: string;
  buttonText: string;
}

export interface CardsProps {
  cards: SingleCard[];
}

const Cards = ({ cards }: CardsProps) => {
  const fadeUpVariant = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const { theme } = useTheme();
  return (
    <main>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 pb-10 gap-10 lg:grid-cols-3 px-10 md:px-20 justify-center items-center`}
      >
        {cards.map((card: SingleCard) => (
          <div
            key={card.id}
            className={`rounded-lg h-full p-5 flex flex-col gap-8 justify-center items-center ${
              theme === "dark"
                ? "border border-white"
                : "border border-gray-900 bg-gray-100"
            }`}
          >
            <Image
              src={
                card.image ||
                "https://ik.imagekit.io/gbfjo9pxy/car1_a9cOuP55N.webp?updatedAt=1725806420588"
              }
              alt={`${card.title} image`}
              width={100}
              height={200}
              className="w-full rounded-md"
            />
            <motion.div
              className="relative flex flex-col justify-start gap-2 items-start w-full"
              variants={fadeUpVariant}
              initial="initial"
              animate="animate"
            >
              <div
                className={`flex flex-col justify-start gap-2 items-start w-full`}
              >
                <p className="text-3xl">{card.title}</p>
                <p>{card.description}</p>
                <button className="p-2 cursor-pointer border w-[100px] rounded-md">
                  {card.buttonText}
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Cards;
