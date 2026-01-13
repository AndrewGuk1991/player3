import {useEffect, useState} from "react";
import type {TrackDetailsResource} from "../api/types.ts";
import {getTrack} from "../api/api.ts";

export const useTrack = (selectedTrackId: string | null) => {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>()

    useEffect(() => {
        if(!selectedTrackId) {
            return
        }
        getTrack(selectedTrackId)
            .then(json => setSelectedTrack(json.data))
    }, [selectedTrackId]);

    return {
        selectedTrack
    }
}