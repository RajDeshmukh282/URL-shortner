import ShortUrl from "../models/short_url.model";

export const saveShortUrl = async(shortUrl,longUrl,userId)=>{
    const newUrl = new ShortUrl({
        short_url: shortUrl,
        full_url: longUrl,
        user_id: userId
    })
    if(userId){
        newUrl.user = userId;
    }

    await newUrl.save();
}