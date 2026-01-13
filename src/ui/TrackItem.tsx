import type {TrackListItemResource} from "../api/types.ts";
import clsx from "clsx";
import styles from './TrackItem.module.css'

type Props = {
    track: TrackListItemResource
    isSelected: boolean
    onTrackSelect: (trackId: string) => void
}

export const TrackItem = ({track, isSelected, onTrackSelect}: Props) => {
    const classes = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected
    })

    return (
        <li className={classes}>
            <div onClick={() => {onTrackSelect(track.id)}}>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls/>
        </li>
    )
}