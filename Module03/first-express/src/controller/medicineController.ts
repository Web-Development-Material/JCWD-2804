import { Request, Response } from "express";
import medicines from "../../dummy/medicines.json" assert { type: "json" };

const getMedicine = (req: Request, res: Response) => {
  return res.send(medicines);
};

const createMedicine = (req: Request, res: Response) => {
  const newMedicine = { ...req.body, id: medicines.data.length + 1 };
  medicines.data.push(newMedicine);
  return res.status(201).send(newMedicine);
};

const updateMedicine = (req: Request, res: Response) => {
  const { id } = req.params;
  const updateMedicine = req.body;
  const index = medicines.data.findIndex(
    (medicine) => medicine.id === parseInt(id)
  );
  if (index !== -1) {
    medicines.data[index] = { ...medicines.data[index], ...updateMedicine };
    return res.status(201).send(medicines.data[index]);
  }
  return res.status(404).send("Medicine not found");
};

const updateMedicinePartial = (req: Request, res: Response) => {
  const { id } = req.params;
  const updateMedicine = req.body;
  const index = medicines.data.findIndex(
    (medicine) => medicine.id === parseInt(id)
  );
  if (index !== -1) {
    medicines.data[index] = { ...medicines.data[index], ...updateMedicine };
    return res.status(201).send(medicines.data[index]);
  }
  return res.status(404).send("Medicine not found");
};

const deleteMedicine = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = medicines.data.findIndex(
    (medicine) => medicine.id === parseInt(id)
  );
  if (index !== -1) {
    const [deletedMedicine] = medicines.data.splice(index, 1);
    return res.status(200).send(deletedMedicine);
  }
};

export {
  getMedicine,
  createMedicine,
  updateMedicine,
  updateMedicinePartial,
  deleteMedicine,
};
