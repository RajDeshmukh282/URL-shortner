import { generateNanoId } from "../utils/helper";

export const  createShortUrl = async (req, res) => {
    try {
        const { url } = req.body;

        // generate short id
        const shortId = generateNanoId(8);

        // create new doc in MongoDB
        const newUrl = new urlShema({
            full_url: url,
            short_url: shortId,
        });

        await newUrl.save();
        console.log("Saved:", newUrl);

        // Send the new URL data back to the client
        res.status(201).json(newUrl);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}