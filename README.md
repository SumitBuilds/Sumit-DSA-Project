



# 🎮 Pattern Memory Game

*A simple web-based memory game built using HTML, CSS, and JavaScript (with Queue Data Structure).*



## 🧠 Overview

The **Pattern Memory Game** is an interactive web game that challenges the player’s memory and attention.
At each level, the game generates a sequence of colors that the player must memorize and reproduce **in the same order**.
The sequence grows with every level — testing how long you can keep up!

This project demonstrates how **data structures (Queue - FIFO)** can be used in a fun and practical way to handle ordered sequences in games.



## ⚙️ Features

✅ Simple and colorful UI
✅ Dynamic level progression
✅ Real-time feedback (correct/wrong)
✅ Uses **Queue (FIFO)** for pattern storage and comparison
✅ Beginner-friendly JavaScript logic
✅ Responsive layout using CSS Grid



## 🧩 Data Structure Used: Queue (FIFO)

The **Queue** is the backbone of the game’s logic.

* The game stores the generated color sequence in a queue (`gameQueue`).
* The player’s inputs are stored in another queue (`playerQueue`).
* Each color is checked in order (First-In-First-Out).
  If any mismatch occurs — the game ends.



## 🕹️ How to Play

1. Click **“Start Game”** to begin.
2. Watch the color pattern carefully.
3. When it’s your turn, repeat the pattern in the **same order**.
4. If you get it right, move to the next level.
5. A single mistake ends the game — test your memory again!



## 🧱 Tech Stack

* **HTML5** – Structure of the game
* **CSS3** – Styling and layout (responsive design)
* **JavaScript (Vanilla)** – Game logic and queue implementation



## 📁 Project Structure


📂 Pattern-Memory-Game
├── index.html         # Main game interface
├── pattern.css        # Styling for buttons, layout, and theme
└── pattern.js         # Core game logic (Queue-based)




## 📸 Preview

Example layout:
🎨 Four colorful buttons (Green, Red, Yellow, Blue) arranged in a grid
📊 Level display and real-time status messages
🚀 Start button to begin the challenge



## 🚀 Future Enhancements

* Add **sound effects** for each color
* Implement **scoreboard** and **high score tracking**
* Add **difficulty modes** (speed variations)
* Support for **mobile touch interactions**



## 👨‍💻 Author

**Sumit**
Passionate about combining **Data Structures** with **interactive web development**.

> *“Where logic meets creativity — through code.”*



