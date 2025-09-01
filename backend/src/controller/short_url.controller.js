import { generateNanoId } from "../utils/helper.js";
import { createShortUrlService } from "../services/short_url.service.js";

export const  createShortUrl = async (req, res) => {
    
        const { url } = req.body;

        // generate short id
        const shortId = await createShortUrlService(url);
        res.send(process.env.API_URL + shortId);
}