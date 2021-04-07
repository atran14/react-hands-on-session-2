import './rating-bar-styles.css';

export interface RatingBarGridProps {
    value: number;
    hoverRating: number;
    actualClickedRating: number;
    onMouseEnter: (value: number) => void;
    onMouseLeave: () => void;
    onMouseClick: (value: number) => void;
}

export function RatingBarGrid(props: RatingBarGridProps) {
    let {
        value,
        hoverRating,
        actualClickedRating,
        onMouseClick,
        onMouseEnter,
        onMouseLeave
    } = props;

    let colorString : string;
    if (hoverRating >= value) {
        colorString = "palevioletred";
    } else if (!hoverRating && ( actualClickedRating >= value ) ) {
        colorString = "palevioletred";
    } else {
        colorString = "white";
    }

    return (
        <>
            <div
                className="rating-bar-grid"
                onMouseEnter={() => onMouseEnter(value)}
                onMouseLeave={() => onMouseLeave()}
                onClick={() => onMouseClick(value)}
                style={{
                    backgroundColor: colorString
                }}>{value}</div>
        </>
    );
}