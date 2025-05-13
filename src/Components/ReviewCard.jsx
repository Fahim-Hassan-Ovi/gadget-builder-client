import React from 'react';
import { Star } from 'lucide-react'; // optional icon library
const ReviewCard = ({r}) => {
    const { name, email, review, rating } = r;

     // Helper to render stars
    const renderStars = () => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={20}
                className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
            />
        ));
    };
    return (
        <div>
            <div className="border rounded-xl p-4 shadow-md bg-white max-w-md mx-auto">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <span className="text-sm text-gray-500">{email}</span>
                    </div>
                    <div className="flex items-center mb-2">{renderStars()}</div>
                    <p className="text-gray-700">{review}</p>
                </div>
        </div>
    );
};

export default ReviewCard;