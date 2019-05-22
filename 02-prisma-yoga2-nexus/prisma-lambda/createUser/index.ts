import { prisma } from "../prisma/generated/prisma-client";

import app from "../app";

app.post("*", async (req, res) => {
  const { email, name }: { email: string; name: string } = req.body;

  if (!email && !name) {
    res.json({ error: "Enter email and name" });
  }

  try {
    const createdUser = await prisma.createUser({ email, name });
    res.json({ user: createdUser });
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default app;
