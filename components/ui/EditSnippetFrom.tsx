"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@/lib/generated/prisma";
import { Button } from "./button";
import Link from "next/link";
import { saveSnippet } from "@/actions";


function EditSnippetFrom({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.descriptionCode);

  const changeEvenHandler = (value: string = "") => {
    setCode(value);
  };

 const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);
  return (
    <div className="flex flex-col gap-4">
      <form action={saveSnippetAction} className="flex items-center justify-between ">
        <h1 className="font-bold text-xl">Your Code Editor:</h1>
        <div className="flex gap-3">
        <Button type="submit" className="cursor-pointer">Save</Button>
        <Link href={"/"} className="cursor-pointer"><Button>Home</Button></Link>
        </div>
      </form>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue={snippet?.descriptionCode}
        theme="vs-dark"
        onChange={changeEvenHandler}
        // className="rounded-xl"
      />
    </div>
  );
}

export default EditSnippetFrom;
