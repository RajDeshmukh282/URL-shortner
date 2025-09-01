import { generateNanoId } from "../utils/helper";

export const  createShortUrl = async (req, res) => {
    
        const { url } = req.body;

        // generate short id
        const shortId = createShortUrlService(url);
}