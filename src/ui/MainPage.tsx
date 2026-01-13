import {PageTitle} from "./PageTitle.tsx";
import {Playlist} from "./Playlist.tsx";
import {TrackDetails} from "./TrackDetails.tsx";
import {useTrackSelection} from "../bll/useTrackSelection.ts";

export const MainPage = () => {
    const {selectedTrackId, handleTrackSelect} = useTrackSelection()

    return (
        <>
            <PageTitle title={'Music Player2'} />
            <Playlist
                selectedTrackId={selectedTrackId}
                onTrackSelect={handleTrackSelect}
            />
            <TrackDetails selectedTrackId={selectedTrackId}/>
        </>
    )
}

