// pages/api/sent-to-facebook.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process the POST data
    const data = req.body;
    // ... send data to Facebook or do something with it
    res.status(200).json({ message: "Data received" });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
