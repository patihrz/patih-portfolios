import React, { useState } from 'react';

const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 h-[210px] w-[500px] rounded-lg"></div>
);

const CardItem = ({ card, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="w-[500px] h-[210px] relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform cursor-pointer"
      onClick={() => onCardClick(card)}
    >
      {!imageLoaded && <SkeletonLoader />}
      <img
        src={card.image}
        alt="screenshot"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover ${imageLoaded ? 'block' : 'hidden'}`}
      />
      <div className="relative z-10 bg-black/60 text-white text-center font-bold py-2 mt-auto absolute bottom-0 w-full">
        {card.name}
      </div>
    </div>
  );
};

const CardList = ({ cards, onCardClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center px-6 py-10">
    {cards.map((card, index) => (
      <CardItem key={index} card={card} onCardClick={onCardClick} />
    ))}
  </div>
);

export default CardList;
