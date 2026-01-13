import {useEffect, useState} from "react";
import type {TrackListItemResource} from "../api/types.ts";
import {getTracks} from "../api/api.ts";


export const useTracks = () => {
    const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)

    useEffect(() => {
        getTracks()
            .then(json => setTracks(json.data))
    }, [])

    return {
        tracks
    }
}