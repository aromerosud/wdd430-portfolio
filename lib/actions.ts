"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import type { State } from "@/lib/project-form-state";
import { auth, signIn } from "@/auth";
import { AuthError } from "next-auth";

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
  title: z.string().min(2, "Title must contain at least 2 characters"),
  description: z
    .string()
    .min(10, "Description must contain at least 10 characters"),
  technologies: z.string().min(2, "Enter at least one technology"),
  type: z.enum(["opensource", "school"]),
  link: z.string().optional(),
  yearCompleted: z.coerce
    .number()
    .int("Year must be a whole number.")
    .gte(2000, "Year must be 2000 or later.")
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
});

async function requireOwnerSession() {
  const session = await auth();

  if (
    !session?.user?.email ||
    session.user.email.toLowerCase() !== process.env.OWNER_EMAIL?.toLowerCase()
  ) {
    throw new Error("Not authorized");
  }

  return session;
}

export async function createProject(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  await requireOwnerSession();
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    type: formData.get("type"),
    link: formData.get("link") || undefined,
    yearCompleted: formData.get("yearCompleted"),
  };

  const parsed = ProjectFormSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to create project.",
    };
  }

  const { title, description, technologies, type, link, yearCompleted } =
    parsed.data;

  const technologiesArray = technologies
    .split(",")
    .map((technology) => technology.trim())
    .filter(Boolean);

  try {
    await sql`
      INSERT INTO projects (title, description, type, technologies, link, year_completed)
      VALUES (
        ${title},
        ${description},
        ${type},
        ARRAY(
          SELECT jsonb_array_elements_text(
            ${JSON.stringify(technologiesArray)}::jsonb
          )
        ),
        ${link ?? null},
        ${yearCompleted}
      )
    `;
  } catch (error) {
    console.error("Error creating project:", error);
    return {
      message: "Database Error: Failed to create project.",
    };
  }

  revalidatePath("/projects");
  redirect("/projects");
}

export async function updateProject(id: number, formData: FormData) {
  await requireOwnerSession();
  validateProjectId(id);
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    type: formData.get("type"),
    link: formData.get("link") || undefined,
    yearCompleted: formData.get("yearCompleted"),
  };

  const parsed = ProjectFormSchema.safeParse(rawData);

  if (!parsed.success) {
    throw new Error("Missing or invalid fields. Failed to update project.");
  }

  const { title, description, technologies, type, link, yearCompleted } =
    parsed.data;

  const technologiesArray = technologies
    .split(",")
    .map((technology) => technology.trim())
    .filter(Boolean);

  try {
    await sql`
      UPDATE projects
      SET
        title = ${title},
        description = ${description},
        type = ${type},
        technologies = ARRAY(
          SELECT jsonb_array_elements_text(
            ${JSON.stringify(technologiesArray)}::jsonb
          )
        ),
        link = ${link ?? null},
        year_completed = ${yearCompleted}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project. Please try again later.");
  }

  revalidatePath("/projects");
  redirect("/projects");
}

export async function deleteProject(id: number) {
  await requireOwnerSession();
  validateProjectId(id);
  try {
    await sql`
      DELETE FROM projects
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw new Error("Failed to delete project. Please try again later.");
  }

  revalidatePath("/projects");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid email or password.";
        default:
          return "Something went wrong.";
      }
    }
    throw error; // re-throw so Next.js handles redirects correctly
  }
}

function validateProjectId(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid project ID.");
  }
}
