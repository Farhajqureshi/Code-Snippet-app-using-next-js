"use server";

import { prisma } from "@/lib/prisma";
import { Snippet } from "next/font/google";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, descriptionCode: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      descriptionCode: descriptionCode,
    },
  });
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
      where: { id }
  }); 
  // revalidatePath("/");
  redirect("/");
}
