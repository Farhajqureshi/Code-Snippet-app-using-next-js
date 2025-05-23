import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

function Snippet() {
  // const router = useRouter();
  const createSnippet = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: {
        title: title,
        descriptionCode: code,
      },
    });

    console.log(snippet);
    redirect("/");
  };
  return (
    <div className="flex items-center justify-around flex-col">
      <div className="flex gap-7 items-center">
        <h1 className="text-2xl font-bold ">Create New Snippet</h1>
        <Link href={"/"}>
          <Button className="cursor-pointer">Go Home</Button>
        </Link>
      </div>

      <div className="w-[400px] border rounded px-10 py-10 flex flex-col mt-4">
        <form action={createSnippet}>
          <div>
            <Label>Title</Label>
            <Input type="text" id="title" name="title" />
          </div>
          <div className="mt-2">
            <Label>Write Code</Label>
            <Textarea name="code" id="code" />
          </div>
          <div className="mt-2">
            <Button className="cursor-pointer" type="submit">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Snippet;
