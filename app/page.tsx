import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  return (
    <div>
      <h1 className="font-bold text-3xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-gray-700 text-xl font-semibold">Snippet</h1>
        <Link href={"/snippet/new"}>
          <Button className="w-[100px] cursor-pointer">New</Button>
        </Link>
      </div>

      {!snippets ? (
        <h1>No Data</h1>
      ) : (
        <div>
          {snippets.map((snippet) => (
            <div key={snippet.id} className="flex items-center justify-between mt-5 bg-gray-300 p-4 rounded cursor-pointer">
              <h1 className="font-semibold text-[17px]">{snippet.title}</h1>
              <Link className="underline underline-offset-1" href={`/snippet/${snippet.id}`}>View</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
