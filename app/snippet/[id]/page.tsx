import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import * as actions from "@/actions"


type SnippetDetailsProps = {
  params: Promise<{id: string}>;
}

const SnippetDetailedPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1>Snippet Not Found</h1>;

  const deleteSnippetActions = actions.deleteSnippet.bind(null, snippet.id); 
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet?.title}</h1>
        <div className="flex items-center gap-1 ">
          <Link href={`/snippet/${snippet.id}/edit`}><Button className="cursor-pointer">Edit</Button></Link>
          <form action={deleteSnippetActions}>
          <Button className="cursor-pointer" variant={"destructive"}>Delete</Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-300 rounded-sm border-gray-200">
         <code>{snippet?.descriptionCode}</code>
      </pre>
      <div>
        <Link href={"/"}><Button >Go Home</Button></Link>
      </div>
    </div>
  );
};

export default SnippetDetailedPage;
