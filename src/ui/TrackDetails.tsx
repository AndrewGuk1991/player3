import styles from './TrackDetails.module.css'
import {useTrack} from "../bll/useTrack.ts";

type Props = {
    selectedTrackId: string | null
}

export const TrackDetails = ({selectedTrackId}: Props) => {
    const {selectedTrack} = useTrack(selectedTrackId)

    return (
        <div className={styles.track}>
            <h2>Track details:</h2>
            {!selectedTrackId && <div>No selected track</div>}
            {selectedTrackId && !selectedTrack && <div>Loading..</div>}
            {selectedTrack && <div>
                <h3>{selectedTrack.attributes.title}</h3>
                <p>
                    {
                        selectedTrack.attributes.lyrics || 'no lyrics'
                    }
                </p>
            </div>}
            {selectedTrackId && selectedTrack && selectedTrackId !== selectedTrack.id && <div>Loading..</div>}
        </div>
    )
}