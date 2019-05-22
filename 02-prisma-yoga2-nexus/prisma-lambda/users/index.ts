import { prisma } from "../prisma/generated/prisma-client";

import app from "../app";

app.get("*", async (req, res) => {
  const users = await prisma.users();

  res.json({ users });
});

export default app;
