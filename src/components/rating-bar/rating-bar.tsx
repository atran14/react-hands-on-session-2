import React from 'react';
import RatingBarFlavorText from './rating-bar-flavor-text';
import { RatingBarGrid } from './rating-bar-grid';
import './rating-bar-styles.css';

export default function RatingBar(props: any) {

    const [currentHoverRating, setCurrentHoverRating] = React.useState(0);
    const [currentActualClickedRating, setCurrentActualClickedRating] = React.useState(0);

    const onMouseEnterHandler = (value: number) => {
        setCurrentHoverRating(value);
    }

    const onMouseLeaveHandler = () => {
        setCurrentHoverRating(0);
    }

    const onMouseClickHandler = (value: number) => {
        setCurrentActualClickedRating(value);
    }

    return (
        <div className="rating-bar-container">
            <div className="rating-bar-header-text">Rating Bar</div>
            <RatingBarFlavorText ratingValue={currentActualClickedRating} />
            <div className="rating-bar-grid-container row">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
                    return (
                        <RatingBarGrid
                            value={value}
                            hoverRating={currentHoverRating}
                            actualClickedRating={currentActualClickedRating}
                            onMouseEnter={onMouseEnterHandler}
                            onMouseLeave={onMouseLeaveHandler}
                            onMouseClick={onMouseClickHandler}
                        />
                    );
                })}
            </div>
        </div>
    )
}