import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
         <h1 className="font-bold text-3xl">Home</h1>
         <div className="flex items-center justify-between">
            <h1 className="text-gray-700 text-xl font-semibold">Snippet</h1>
            <Link href={"/snippet/new"}><Button className="w-[100px] cursor-pointer">New</Button></Link>
         </div>
    </div>
  );
}
