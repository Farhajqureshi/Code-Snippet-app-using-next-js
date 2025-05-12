"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

function Snippet() {

  const handleCreate = async (formData: FormData) => {
    "use server"
     
  }
  return (
    <div className="flex items-center justify-around flex-col">
      <div className="flex gap-7 items-center">
        <h1 className="text-2xl font-bold ">Create New Snippet</h1>
        <Link href={"/"}>
          <Button className="cursor-pointer">Go Home</Button>
        </Link>
      </div>

      <div className="w-[400px] border px-10 py-10 flex flex-col mt-4">
        <form>
          <div>
            <Label>Title</Label>
            <Input type="text" id="title" name="title" />
          </div>
          <div className="mt-2">
            <Label>Write Code</Label>
            <Textarea id="writeCode" name="write Code" />
          </div>
          <div className="mt-2">
            <Button className="cursor-pointer" type="submit">Create</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Snippet;
