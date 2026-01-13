import type {TrackListItemResource} from "../api/types.ts";
import styles from './Playlist.module.css'
import {TrackItem} from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.ts";

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (trackId: string) => void
}

export const Playlist = ({selectedTrackId, onTrackSelect}: Props) => {
    const {tracks} = useTracks()

    return (
        <>
            {!tracks && <div>Loading...</div>}
            {tracks &&
                <ul className={styles.tracks}>
                    {tracks?.map((track: TrackListItemResource) => {
                        return <TrackItem
                            onTrackSelect={onTrackSelect}
                            track={track}
                            isSelected={track.id === selectedTrackId}
                            key={track.id}/>
                    })
                    }
                </ul>
            }
        </>

    )
}