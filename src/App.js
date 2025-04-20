import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import CardList from "./components/CardList";
import CardModal from "./components/CardModal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SignUp from "./components/SignUp";

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const importAll = (context) => context.keys().map(context);
    let cardData = importAll(require.context("./profileData", false, /\.json$/));

    // Format data untuk HeroParallax dan CardList
    cardData = cardData.map((data) => ({
      ...data,
      name: data.name,
      title: data.name,
      link: data.livePortfolioLink || data.githubRepoLink,
      thumbnail: data.image,
    })).sort((a, b) =>
      a.name.toUpperCase().localeCompare(b.name.toUpperCase())
    );

    setCards(cardData);
  }, []);

  useEffect(() => {
    const filtered = cards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchTerm, cards]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home products={cards} />} />
          <Route
  path="/portfolios"
  element={
    <div className="flex flex-col min-h-screen">
      <Navbar
        searchTerm={searchTerm}
        handleSearchChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex-grow">
        <CardList cards={filteredCards} onCardClick={handleCardClick} />
        <CardModal card={selectedCard} onClose={handleCloseModal} />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  }
/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
