import {useState} from "react";

export const useTrackSelection = () => {
    const [selectedTrackId, setSelectedTrackId] = useState<null | string>(null);

    const handleTrackSelect = (trackId: string) => {
        setSelectedTrackId(trackId)
    }

    return {
        selectedTrackId,
        handleTrackSelect
    }
}