// task 1
const keys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let currentIndexKey = 0;

const keyElem = document.getElementById("key");
const newGame = document.getElementById("newGame");

function updateKey() {
  keyElem.textContent = keys[currentIndexKey];
}

document.addEventListener("keydown", (e) => {
  if (e.key === keys[currentIndexKey]) {
    currentIndexKey++;

    if (currentIndexKey < keys.length) {
    } else {
      PNotify.success({
        title: "Вітаю!",
        text: "Ви натиснули на всі клавіші правильно",
      });
    }
  } else {
    PNotify.error({
      title: "НАТИСНІТЬ",
      text: "На корректну клавішу",
    });
  }
  updateKey();
});

function startNewGame() {
  currentIndexKey = 0;
  updateKey();
}

newGame.addEventListener("click", startNewGame);

// 2 task

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const ctx = document.getElementById("salesChart");
const salesChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});