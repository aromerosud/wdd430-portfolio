import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

async function createOwner() {
  const name = process.env.OWNER_NAME;
  const email = process.env.OWNER_EMAIL;
  const password = process.env.OWNER_PASSWORD;

  if (!name || !email || !password) {
    throw new Error("Missing owner environment variables.");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await sql`
    INSERT INTO users (name, email, password_hash)
    VALUES (${name}, ${email}, ${passwordHash})
  `;

  console.log("Owner account created successfully.");
}

createOwner()
  .catch(console.error)
  .finally(() => process.exit());
