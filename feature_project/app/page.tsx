import Image from "next/image";
import PapaJohnsAdCard from "./components/PapaJohnsAdCard";

export default function Home() {
  return (
    <div className="flex flex-col ">


<Image        src="/images/papa_johns_logo.png"
        alt="Papa John's Logo"
        width={200}
        height={100}
        className="mb-6"
      />

    <PapaJohnsAdCard
        imageUrl="/images/how_to_wash_towels.jpg" 
      />
    </div>
  );
}
