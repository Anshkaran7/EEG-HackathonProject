import React, { useState, useEffect } from 'react';


function MemoryGame() {
  const animals = [
    { id: 1, name: 'Elephant', image: "/images/elephant.png" },
    { id: 2, name: 'Lion', image: "/images/lion.png" },
    { id: 3, name: 'Monkey', image: "/images/monkey.png" },
    { id: 4, name: 'Giraffe', image: "/images/girafe.png" },
    { id: 5, name: 'Zebra', image: "/images/zebra.png" },
    { id: 6, name: 'Tiger', image: "/images/tiger.png" },
  ];

  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    const shuffledAnimals = shuffle(animals);
    const pairedAnimals = [...shuffledAnimals, ...shuffledAnimals];
    setCards(pairedAnimals);
  }, []);

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleCardClick = (index) => {
    if (flippedIndexes.includes(index) || gameCompleted) {
      // Card is already flipped or the game is completed, return early
      return;
    }

    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      // Two cards are flipped, check for a match
      const [firstIndex, secondIndex] = newFlippedIndexes;
      const [firstCard, secondCard] = [cards[firstIndex], cards[secondIndex]];

      if (firstCard.name === secondCard.name) {
        // Match found
        setMatchedPairs([...matchedPairs, firstCard.name]);

        if (matchedPairs.length + 1 === animals.length) {
          // All matches found, game over with a win
          setGameCompleted(true);
          alert('You won!');
        }
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          setFlippedIndexes([]);
        }, 1000);
      }
    } else if (newFlippedIndexes.length === cards.length) {
      // All cards have been revealed without a win
      setGameCompleted(true);
      alert('Game over');
    }
  };

  const resetGame = () => {
    const shuffledAnimals = shuffle(animals);
    const pairedAnimals = [...shuffledAnimals, ...shuffledAnimals];
    setCards(pairedAnimals);
    setFlippedIndexes([]);
    setMatchedPairs([]);
    setGameCompleted(false);
  };

  return (
    <div className="container mx-auto max-w-xl mt-10">
      <h1 className="text-3xl font-bold mb-4 text-theme-gray-dark">Memory Game</h1>
      <div className="grid grid-cols-3 gap-4" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        {cards.map((animal, index) => (
          <div
            key={index}
            className={`bg-blue-200 rounded-md h-20 flex justify-center items-center cursor-pointer transition-transform transform hover:scale-105 ${flippedIndexes.includes(index) || matchedPairs.includes(animal.name)
                ? 'bg-white'
                : ''
              }`}
            onClick={() => handleCardClick(index)}
          >
            {flippedIndexes.includes(index) || matchedPairs.includes(animal.name) ? (
              <img src={animal.image} alt={animal.name} className="w-20 h-20 object-cover" />
            ) : (
              <span>?</span>
            )}
          </div>
        ))}

      </div>
      <button
        className={`mt-6 bg-${gameCompleted ? 'red' : 'blue'}-500 hover:bg-${gameCompleted ? 'red' : 'blue'}-600 text-white py-2 px-4 rounded-md`}
        onClick={resetGame}
        disabled={gameCompleted}
      >
        {gameCompleted ? 'Game Over' : 'Reset Game'}
      </button>
    </div>
  );
}

export default MemoryGame;
