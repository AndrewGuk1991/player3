
type TrackAttachment = {
    url: string
}

type TrackListItemAttributes = {
    title: string
    attachments: TrackAttachment[]
}

export type TrackListItemResource = {
    id: string
    attributes: TrackListItemAttributes
}


type TrackDetailsAttributes = {
    title: string
    lyrics: string
}

export type TrackDetailsResource = {
    id: string
    attributes: TrackDetailsAttributes
}