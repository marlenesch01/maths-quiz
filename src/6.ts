import { Math } from "mathjs";

const getRandomNumber = (max: number): number => {
  const rand = Math.random() * max;
  return Math.floor(rand);
};

export { getRandomNumber };
