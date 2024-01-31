// pages/api/send-to-facebook.ts

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

type RequestBody = {
  image: string;
  colorData: {
    [key: string]: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { image, colorData } = req.body as RequestBody;

    // Logic to send data to Facebook Messenger
    // This part will depend on how you interact with the Facebook API

    res.status(200).json({ message: "Data sent successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
