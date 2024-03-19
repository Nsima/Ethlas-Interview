import HeadSection from "./sections/HeadSection";
import TransactionRecordSection from "./sections/TransactionRecordSection";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-[calc(100vh_-_28px)] mb-2 overflow-auto md:gap-3 md:items-center md:px-6">
      <HeadSection/>
      <TransactionRecordSection/>
    </main>
  );
}
