// Parent class
class Employee {
  // Constructor dengan parameter hourlyRate untuk mengatur tarif per jam
  constructor(hourlyRate) {
    this.hourlyRate = hourlyRate;
    this.workingHours = 0; // Jumlah jam kerja default
  }

  // Method untuk menambah jumlah jam kerja per hari
  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  // Method untuk menghitung total gaji
  calculateTotalSalary() {
    let totalSalary = this.hourlyRate * this.workingHours;

    // Periksa apakah jumlah jam kerja per hari lebih dari 6 jam
    if (this.workingHours > 6) {
      totalSalary += (this.hourlyRate - 25000) * (this.workingHours - 6);
    }

    return totalSalary;
  }
}

// Child class FulltimeEmployee
class FulltimeEmployee extends Employee {
  constructor() {
    super(100000); // Set tarif per jam untuk karyawan full-time
  }
}

// Child class ParttimeEmployee
class ParttimeEmployee extends Employee {
  constructor() {
    super(50000); // Set tarif per jam untuk karyawan part-time
  }

  // Override method calculateTotalSalary untuk karyawan part-time
  calculateTotalSalary() {
    let totalSalary = this.hourlyRate * this.workingHours;

    // Periksa apakah jumlah jam kerja per hari lebih dari 6 jam
    if (this.workingHours > 6) {
      totalSalary += (this.hourlyRate - 20000) * (this.workingHours - 6);
    }

    return totalSalary;
  }
}

// Membuat objek karyawan full-time dan part-time
const fulltimeEmployee = new FulltimeEmployee();
const parttimeEmployee = new ParttimeEmployee();

// Menambah jumlah jam kerja per hari
fulltimeEmployee.addWorkingHours(8); // Full-time bekerja 8 jam
parttimeEmployee.addWorkingHours(5); // Part-time bekerja 5 jam

// Menghitung dan menampilkan total gaji
console.log(`Total gaji Full-time: ${fulltimeEmployee.calculateTotalSalary()}`);
console.log(`Total gaji Part-time: ${parttimeEmployee.calculateTotalSalary()}`);
