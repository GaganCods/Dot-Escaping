
import React from 'react';
import type { Review } from '../types';
import { StarIcon } from './icons/FeatureIcons';

const reviews: Review[] = [
  {
    quote: "Addictively simple! I can't put it down. Perfect for my commute.",
    author: 'GamerGirl94',
    rating: 5,
  },
  {
    quote: "Surprisingly challenging. The random levels keep it fresh every time.",
    author: 'ProStrategist',
    rating: 5,
  },
  {
    quote: "Love the clean design. It's refreshing to play a game that's not cluttered.",
    author: 'MinimalistMax',
    rating: 4,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-slate-600'
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col h-full">
      <div className="flex-grow">
        <p className="text-slate-300 italic">"{review.quote}"</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="font-semibold text-white">- {review.author}</p>
        <StarRating rating={review.rating} />
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What Players Are Saying</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
