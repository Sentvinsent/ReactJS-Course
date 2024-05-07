export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, description, image, address } = data;
    const dbUrl =
      "https://react-course-proj-e9722-default-rtdb.firebaseio.com/meetups.json";

    try {
      const response = await fetch(dbUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        res.status(201).json({ message: "Inserted" });
      } else {
        throw new Error({ message: "Error inserting into DB" });
      }
    } catch {
      res.status(500).json({ message: "Not inserted due to server error" });
    }
  }
}
