import './rating-bar-styles.css';

interface RatingBarFlavorTextProps {
    ratingValue: number;
} 

export default function RatingBarFlavorText(props : RatingBarFlavorTextProps) {
    let { ratingValue } = props;
    const flavorText = 
        ratingValue < 1
        ? "You haven't rated our service yet. Please leave us a feedback!"
        : `You have rated our service ${ratingValue}/10. Thank you for your patronage!`;
    
    return (
        <>
            <div className="rating-bar-flavor-text">{flavorText}</div>
        </>
    );
}