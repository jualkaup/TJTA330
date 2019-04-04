export interface Message {
    sender: string,
    datetime: Date,
    content: string,
    platform: "Facebook" | "LinkedIn" | "Twitter" | "Instagram",
    media: Media[]
}

export interface Media {
    imageUrl: string,
    imageTitle: string,
    imageCaption: string
}