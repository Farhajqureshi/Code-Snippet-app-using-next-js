import EditSnippetFrom from "@/components/ui/EditSnippetFrom";
import { prisma } from "@/lib/prisma";

const EditSnippetPage = async({
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
    return(
        <div>
              <EditSnippetFrom snippet={snippet}/>
        </div>
    )
}

export default EditSnippetPage;