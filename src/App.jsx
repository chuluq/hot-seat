import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from "lucide-react";

const HotSeatSlides = () => {
  const team1Keywords = [
    { word: "PASSWORD", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "PHISHING", level: "Medium", points: 2, color: "bg-yellow-500" },
    { word: "HACKER", level: "Easy", points: 1, color: "bg-green-500" },
    {
      word: "TWO-FACTOR AUTHENTICATION",
      level: "Medium",
      points: 2,
      color: "bg-yellow-500",
    },
    { word: "VIRUS", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "RANSOMWARE", level: "Hard", points: 3, color: "bg-orange-500" },
    { word: "EMAIL", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "DATA BREACH", level: "Medium", points: 2, color: "bg-yellow-500" },
    { word: "ENCRYPTION", level: "Medium", points: 2, color: "bg-yellow-500" },
    {
      word: "IDENTITY THEFT",
      level: "Medium",
      points: 2,
      color: "bg-yellow-500",
    },
    { word: "SECURITY", level: "Easy", points: 1, color: "bg-green-500" },
    {
      word: "SOCIAL ENGINEERING",
      level: "Hard",
      points: 3,
      color: "bg-orange-500",
    },
    { word: "MALWARE", level: "Medium", points: 2, color: "bg-yellow-500" },
    { word: "VPN", level: "Medium", points: 2, color: "bg-yellow-500" },
    { word: "KEYLOGGER", level: "Hard", points: 3, color: "bg-orange-500" },
    { word: "FIREWALL", level: "Medium", points: 2, color: "bg-yellow-500" },
    {
      word: "PASSWORD MANAGER",
      level: "Hard",
      points: 3,
      color: "bg-orange-500",
    },
    { word: "BIOMETRIC", level: "Hard", points: 3, color: "bg-orange-500" },
    { word: "CRYPTOGRAPHY", level: "Expert", points: 5, color: "bg-red-500" },
    {
      word: "ZERO-DAY EXPLOIT",
      level: "Expert",
      points: 5,
      color: "bg-red-500",
    },
  ];

  const team2Keywords = [
    { word: "DOWNLOAD", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "SPAM", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "PRIVATE", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "ACCOUNT", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "INTERNET", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "SCAM", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "UPLOAD", level: "Easy", points: 1, color: "bg-green-500" },
    { word: "HTTPS", level: "Medium", points: 2, color: "bg-yellow-500" },
    { word: "BACKUP", level: "Medium", points: 2, color: "bg-yellow-500" },
    { word: "COOKIE", level: "Medium", points: 2, color: "bg-yellow-500" },
    { word: "ANTIVIRUS", level: "Medium", points: 2, color: "bg-yellow-500" },
    {
      word: "PRIVACY SETTINGS",
      level: "Medium",
      points: 2,
      color: "bg-yellow-500",
    },
    { word: "PATCH", level: "Medium", points: 2, color: "bg-yellow-500" },
    {
      word: "DIGITAL FOOTPRINT",
      level: "Hard",
      points: 3,
      color: "bg-orange-500",
    },
    { word: "TROJAN HORSE", level: "Hard", points: 3, color: "bg-orange-500" },
    {
      word: "SHOULDER SURFING",
      level: "Hard",
      points: 3,
      color: "bg-orange-500",
    },
    { word: "BOTNET", level: "Hard", points: 3, color: "bg-orange-500" },
    { word: "METADATA", level: "Hard", points: 3, color: "bg-orange-500" },
    {
      word: "MAN-IN-THE-MIDDLE ATTACK",
      level: "Expert",
      points: 5,
      color: "bg-red-500",
    },
    {
      word: "PENETRATION TESTING",
      level: "Expert",
      points: 5,
      color: "bg-red-500",
    },
  ];

  const [team1Words, setTeam1Words] = useState(team1Keywords);
  const [team2Words, setTeam2Words] = useState(team2Keywords);
  const [team1Index, setTeam1Index] = useState(0);
  const [team2Index, setTeam2Index] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [score, setScore] = useState({ team1: 0, team2: 0 });
  const [gameStarted, setGameStarted] = useState(false);

  const currentKeyword =
    currentTeam === 1 ? team1Words[team1Index] : team2Words[team2Index];
  const currentIndex = currentTeam === 1 ? team1Index : team2Index;
  const totalWords = currentTeam === 1 ? team1Words.length : team2Words.length;

  const nextSlide = () => {
    if (currentTeam === 1) {
      if (team1Index < team1Words.length - 1) {
        setTeam1Index(team1Index + 1);
      }
    } else {
      if (team2Index < team2Words.length - 1) {
        setTeam2Index(team2Index + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentTeam === 1) {
      if (team1Index > 0) {
        setTeam1Index(team1Index - 1);
      }
    } else {
      if (team2Index > 0) {
        setTeam2Index(team2Index - 1);
      }
    }
  };

  const shuffleKeywords = () => {
    const shuffled1 = [...team1Keywords].sort(() => Math.random() - 0.5);
    const shuffled2 = [...team2Keywords].sort(() => Math.random() - 0.5);
    setTeam1Words(shuffled1);
    setTeam2Words(shuffled2);
    setTeam1Index(0);
    setTeam2Index(0);
    setCurrentTeam(1);
  };

  const resetGame = () => {
    setTeam1Index(0);
    setTeam2Index(0);
    setScore({ team1: 0, team2: 0 });
    setCurrentTeam(1);
    setGameStarted(false);
  };

  const addPoints = () => {
    if (currentTeam === 1) {
      setScore({ ...score, team1: score.team1 + currentKeyword.points });
    } else {
      setScore({ ...score, team2: score.team2 + currentKeyword.points });
    }
    nextSlide();
  };

  const skipWord = () => {
    nextSlide();
  };

  const switchTeam = () => {
    setCurrentTeam(currentTeam === 1 ? 2 : 1);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="text-center text-white max-w-4xl">
          <div className="mb-8">
            <h1 className="text-7xl font-bold mb-4 animate-pulse">🔥💺</h1>
            <h1 className="text-6xl font-bold mb-6">DATA PROTECTION</h1>
            <h2 className="text-4xl font-semibold mb-8">Hot Seat Challenge!</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-6">How to Play:</h3>
            <div className="text-left text-xl space-y-4">
              <p>1️⃣ Each team gets their OWN set of 20 unique words</p>
              <p>2️⃣ One student sits in hot seat (facing away from screen)</p>
              <p>3️⃣ Team gives clues WITHOUT saying the word</p>
              <p>4️⃣ 60 seconds per word - GO!</p>
              <p>5️⃣ Click "Switch Team" when ready to change turns</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 text-lg">
            <div className="bg-green-500/20 border-2 border-green-500 rounded-xl p-4">
              <div className="font-bold text-2xl mb-2">⭐ EASY</div>
              <div>1 point</div>
            </div>
            <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-xl p-4">
              <div className="font-bold text-2xl mb-2">⭐⭐ MEDIUM</div>
              <div>2 points</div>
            </div>
            <div className="bg-orange-500/20 border-2 border-orange-500 rounded-xl p-4">
              <div className="font-bold text-2xl mb-2">⭐⭐⭐ HARD</div>
              <div>3 points</div>
            </div>
            <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-4">
              <div className="font-bold text-2xl mb-2">⭐⭐⭐⭐ EXPERT</div>
              <div>5 points</div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setGameStarted(true)}
            className="bg-white text-purple-900 px-12 py-6 rounded-full text-3xl font-bold hover:bg-purple-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            START GAME! 🚀
          </button>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              type="button"
              onClick={shuffleKeywords}
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full flex items-center gap-2 transition-all"
            >
              <Shuffle size={20} />
              Shuffle Words
            </button>
          </div>

          <div className="mt-8 bg-blue-500/20 border-2 border-blue-400 rounded-xl p-6">
            <p className="text-xl font-semibold">
              📝 Note: Each team has completely different words!
            </p>
            <p className="text-lg mt-2">
              Team 1: 20 words | Team 2: 20 different words
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col">
      {/* Score Bar */}
      <div className="bg-black/30 backdrop-blur-sm text-white p-4 flex justify-between items-center">
        <div
          className={`text-2xl font-bold px-6 py-2 rounded-lg ${
            currentTeam === 1
              ? "bg-blue-500 ring-4 ring-blue-300"
              : "bg-blue-500/30"
          }`}
        >
          Team 1: {score.team1}
          <div className="text-sm font-normal mt-1">
            Word {team1Index + 1}/20
          </div>
        </div>
        <div className="text-center">
          <div className="text-xl mb-2">Current Team's Progress</div>
          <div className="text-3xl font-bold">
            {currentIndex + 1} / {totalWords}
          </div>
        </div>
        <div
          className={`text-2xl font-bold px-6 py-2 rounded-lg ${
            currentTeam === 2
              ? "bg-red-500 ring-4 ring-red-300"
              : "bg-red-500/30"
          }`}
        >
          Team 2: {score.team2}
          <div className="text-sm font-normal mt-1">
            Word {team2Index + 1}/20
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl">
          <div className="bg-white rounded-3xl shadow-2xl p-16 text-center min-h-[500px] flex flex-col justify-center">
            {/* Difficulty Badge */}
            <div className="flex justify-center mb-8">
              <div
                className={`${currentKeyword.color} text-white px-8 py-3 rounded-full text-2xl font-bold inline-block`}
              >
                {currentKeyword.level} - {currentKeyword.points}{" "}
                {currentKeyword.points === 1 ? "point" : "points"}
              </div>
            </div>

            {/* The Word */}
            <div className="mb-12">
              <h1 className="text-8xl font-black text-gray-800 mb-4 wrap-break-word leading-tight">
                {currentKeyword.word}
              </h1>
            </div>

            {/* Turn Indicator */}
            <div
              className={`text-3xl font-bold mb-8 ${
                currentTeam === 1 ? "text-blue-600" : "text-red-600"
              }`}
            >
              Team {currentTeam}'s Turn! 🎯
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                type="button"
                onClick={addPoints}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-2xl font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                ✓ Correct! (+{currentKeyword.points})
              </button>
              <button
                type="button"
                onClick={skipWord}
                className="bg-gray-400 hover:bg-gray-500 text-white px-8 py-4 rounded-xl text-2xl font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                ✗ Skip (0 points)
              </button>
              <button
                type="button"
                onClick={switchTeam}
                className={`${
                  currentTeam === 1
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white px-8 py-4 rounded-xl text-2xl font-bold transition-all transform hover:scale-105 shadow-lg`}
              >
                🔄 Switch to Team {currentTeam === 1 ? 2 : 1}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-black/30 backdrop-blur-sm text-white p-6 flex justify-between items-center">
        <button
          type="button"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed px-6 py-3 rounded-full flex items-center gap-2 transition-all"
        >
          <ChevronLeft size={24} />
          Previous
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={resetGame}
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            <RotateCcw size={20} />
            Reset Game
          </button>
          <button
            type="button"
            onClick={shuffleKeywords}
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            <Shuffle size={20} />
            Shuffle
          </button>
        </div>

        <button
          type="button"
          onClick={nextSlide}
          disabled={currentIndex === totalWords - 1}
          className="bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed px-6 py-3 rounded-full flex items-center gap-2 transition-all"
        >
          Next
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HotSeatSlides;
