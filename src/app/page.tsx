"use client";

import Image from "next/image";
import styles from "./page.module.css";
import styles2 from "./test.module.scss";
import Link from "next/link";
import { useStore } from "@/stores";

const Count = () => {
  const count = useStore((state) => state.count);
  console.log("🚀 ~ file: page.tsx:11 ~ Count ~ count:", count);
  return (
    <>
      <h2>count: {count}</h2>
    </>
  );
};

const IncreaseCount = () => {
  const increaseCount = useStore((state) => state.increaseCount);
  return (
    <>
      <button onClick={() => increaseCount()}>Increase</button>
    </>
  );
};

const ResetButton = () => {
  const { resetCount } = useStore();

  return <button onClick={() => resetCount()}>Reset</button>;
};

export default function Home() {
  return (
    <main className={styles2.test}>
      <Link href={"/login"}>Login Page!!!</Link>
      <Count />
      <IncreaseCount />
      <ResetButton />
    </main>
  );
}
