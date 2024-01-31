// pages/api/proxy.js
export default async function handler(req, res) {
  const url = "https://www.facebook.com/..."; // The URL you want to proxy to

  const response = await fetch(url, {
    method: req.method,
    headers: {
      ...req.headers,
      origin: null, // Remove the origin header
      // ... any other headers Facebook requires
    },
    body: req.method === "POST" ? JSON.stringify(req.body) : null,
  });

  // Send back Facebook's response to the client
  res.status(response.status);
  for (const key of response.headers.keys()) {
    res.setHeader(key, response.headers.get(key));
  }
  res.send(await response.text());
}
