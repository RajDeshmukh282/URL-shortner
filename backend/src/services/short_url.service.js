import { generateNanoId } from "../utils/helper";

export const createShortUrlService = async (url) => {
    const shortId = generateNanoId(8);
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortId,
    });

    await newUrl.save();
    console.log("Saved:", newUrl);
    return newUrl;
};
 