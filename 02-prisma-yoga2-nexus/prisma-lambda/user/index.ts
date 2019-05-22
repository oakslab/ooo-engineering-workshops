import { prisma } from "../prisma/generated/prisma-client";

import app from "../app";

app.get("*", async (req, res) => {
  const user = await prisma.user({ id: req.query.id });

  res.json({ user });
});

export default app;
