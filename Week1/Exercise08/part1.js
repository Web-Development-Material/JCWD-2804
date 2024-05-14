// Define Player class
class Player {
  constructor(name) {
    // Inisialisasi properti name, health, dan power dengan nilai default
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  // Metode damage untuk mengurangi health pemain berdasarkan power
  damage(power) {
    this.health -= power;
  }

  // Metode useItem untuk menambah health dan power pemain berdasarkan item yang diberikan
  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  // Metode showStatus untuk menampilkan status pemain (nama, health, dan power)
  showStatus() {
    return `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`;
  }
}

// Define ShootingGame class
class ShootingGame {
  constructor(player1, player2) {
    // Inisialisasi player1 dan player2
    this.player1 = player1;
    this.player2 = player2;
  }

  // Metode getRandomItem untuk mendapatkan item secara acak (health +10 atau power +10)
  getRandomItem() {
    return {
      health: Math.random() >= 0.5 ? 10 : 0,
      power: Math.random() >= 0.5 ? 10 : 0,
    };
  }

  // Metode start untuk memulai permainan
  start() {
    // Inisialisasi pemain saat ini dan pemain berikutnya
    let currentPlayer = this.player1;
    let nextPlayer = this.player2;

    // Perulangan selama kedua pemain masih memiliki health di atas 0
    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log("--------------------------------------------------");
      console.log(
        `${this.player1.showStatus()} vs ${this.player2.showStatus()}`
      );

      // Mendapatkan item acak untuk setiap pemain sebelum menembak
      const player1Item = this.getRandomItem();
      const player2Item = this.getRandomItem();

      // Menggunakan item yang didapatkan oleh masing-masing pemain
      currentPlayer.useItem(player1Item);
      nextPlayer.useItem(player2Item);

      // Menampilkan item yang didapatkan oleh masing-masing pemain
      console.log(
        `${this.player1.name} gets item: health +${player1Item.health}, power +${player1Item.power}`
      );
      console.log(
        `${this.player2.name} gets item: health +${player2Item.health}, power +${player2Item.power}`
      );

      // Menyebabkan damage pada pemain berikutnya dengan power pemain saat ini
      const damage = currentPlayer.power;
      nextPlayer.damage(damage);

      // Menampilkan informasi bahwa pemain saat ini menembak pemain berikutnya
      console.log(
        `${currentPlayer.name} shoots ${nextPlayer.name} with power ${damage}`
      );
      console.log(`${nextPlayer.name} health reduced to ${nextPlayer.health}`);

      // Memeriksa apakah pemain berikutnya sudah kehabisan health, jika iya, maka pemain saat ini menang
      if (nextPlayer.health <= 0) {
        console.log(`${currentPlayer.name} wins!`);
        break;
      }

      // Menukar pemain saat ini dengan pemain berikutnya untuk giliran selanjutnya
      [currentPlayer, nextPlayer] = [nextPlayer, currentPlayer];
    }
  }
}

// Create players
const player1 = new Player("A");
const player2 = new Player("B");

// Create game
const game = new ShootingGame(player1, player2);

// Start game
game.start();
