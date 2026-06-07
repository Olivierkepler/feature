import Image from "next/image";
import PapaJohnsAdCard from "./components/PapaJohnsAdCard";

export default function Home() {
  return (
    <div className="flex flex-col ">



     <PapaJohnsAdCard
        imageUrl="/feature/images/how_to_wash_towels.jpg"
      />
    </div>
  );
}
