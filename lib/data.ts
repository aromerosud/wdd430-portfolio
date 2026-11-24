import { sql } from "@vercel/postgres";

export async function getUserByEmail(email: string) {
  try {
    const result = await sql`
      SELECT
        id,
        name,
        email,
        password_hash AS "passwordHash"
      FROM users
      WHERE email = ${email}
      LIMIT 1
    `;

    return result.rows[0] ?? null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user.");
  }
}
