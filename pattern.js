    const colors = ["green", "red", "yellow", "blue"];
    let gameQueue = [];
    let playerQueue = [];
    let level = 0;
    let isPlayerTurn = false;

    const levelText = document.getElementById("level");
    const statusText = document.getElementById("status");
    const buttons = document.querySelectorAll(".btn");

    // Play sound or flash
    function flashColor(color) {
      const btn = document.getElementById(color);
      btn.classList.add("active");
      setTimeout(() => btn.classList.remove("active"), 400);
    }

    // Generate next color in queue
    function nextSequence() {
      const randomColor = colors[Math.floor(Math.random() * 4)];
      gameQueue.push(randomColor);
      level++;
      levelText.textContent = `Level: ${level}`;
      statusText.textContent = "Watch the pattern...";
      isPlayerTurn = false;

      // Flash all colors in queue
      let i = 0;
      const interval = setInterval(() => {
        flashColor(gameQueue[i]);
        i++;
        if (i >= gameQueue.length) {
          clearInterval(interval);
          isPlayerTurn = true;
          playerQueue = [];
          statusText.textContent = "Your turn!";
        }
      }, 700);
    }

    // Compare player's choice with queue
    function handlePlayerClick(color) {
      if (!isPlayerTurn) return;

      flashColor(color);
      playerQueue.push(color);

      const currentIndex = playerQueue.length - 1;
      if (playerQueue[currentIndex] !== gameQueue[currentIndex]) {
        statusText.textContent = "❌ Wrong pattern! Game Over.";
        isPlayerTurn = false;
        gameQueue = [];
        level = 0;
        return;
      }

      if (playerQueue.length === gameQueue.length) {
        statusText.textContent = "✅ Correct! Next Level...";
        setTimeout(() => nextSequence(), 1000);
      }
    }

    // Start the game
    document.getElementById("start-btn").addEventListener("click", () => {
      gameQueue = [];
      playerQueue = [];
      level = 0;
      nextSequence();
    });

    // Add event listeners
    buttons.forEach(btn => {
      btn.addEventListener("click", () => handlePlayerClick(btn.id));
    });