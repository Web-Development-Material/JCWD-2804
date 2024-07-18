function bookFlight(destination: string): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`Memesan penerbangan ke ${destination}...`);
    setTimeout(() => {
      resolve(`Penerbangan ke ${destination} telah dipesan.`);
    }, 3000);
  });
}

function bookHotel(hotelName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`Memesan hotel: ${hotelName}...`);
    setTimeout(() => {
      resolve(`Hotel "${hotelName}" telah dipesan.`);
    }, 2000);
  });
}

async function planVacation(destination: string, hotelName: string) {
  try {
    const flightMessage = await bookFlight(destination);
    console.log(flightMessage);

    const hotelMessage = await bookHotel(hotelName);
    console.log(hotelMessage);

    console.log(
      `Liburan ke ${destination} dan menginap di ${hotelName} telah direncanakan.`
    );
  } catch (error) {
    console.error("Terjadi kesalahan saat merencanakan liburan:", error);
  }
}

// Contoh penggunaan
planVacation("Bali", "Hotel Bali Indah");
