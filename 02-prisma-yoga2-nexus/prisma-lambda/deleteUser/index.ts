import { prisma } from "../prisma/generated/prisma-client";

import app from "../app";

app.delete("*", async (req, res) => {
  try {
    const user = await prisma.deleteUser({ id: req.query.id });
    res.json({ user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default app;
