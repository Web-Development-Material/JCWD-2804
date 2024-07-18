import { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
import { db } from "../config/database";

export const createTransaction = async (req: Request, res: Response) => {
  const { user_id, hotel_id, booking_date, nights, total_amount } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO Transaction (user_id, hotel_id, booking_date, nights, total_amount) VALUES (?, ?, ?, ?, ?)",
      [user_id, hotel_id, booking_date, nights, total_amount]
    );
    res.status(201).json(result);
  } catch (error) {
    console.error("Failed to create transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

export const getTransactionsByUserId = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    const [rows] = await db.query(
      "SELECT * FROM Transaction WHERE user_id = ?",
      [user_id]
    );
    res.json(rows);
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

// transaction using snap method

export const createSnapTransaction = async (req: Request, res: Response) => {
  const { order_id, gross_amount, first_name, last_name, email, phone } =
    req.body;

  const bodyRequest = {
    transaction_details: {
      order_id: order_id,
      gross_amount: gross_amount,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
    },
  };

  try {
    const midtransResponse = await axios.post(
      "https://app.sandbox.midtrans.com/snap/v1/transactions",
      bodyRequest,
      {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: `${process.env.MIDTRANS_SERVER_KEY}`,
          password: "",
        },
      }
    );

    res.status(201).json(midtransResponse.data);
  } catch (error: any) {
    console.error("Failed to create transaction:", error);
    res.status(500).json({
      error: "Failed to create transaction",
      status: error.response.status + " " + error.response.statusText,
      description: error.response.data,
    });
  }
};

// transaction using core api : credit card

export const createCreditCardTransaction = (req: Request, res: Response) => {
  const {
    card_number,
    card_exp_month,
    card_exp_year,
    card_cvv,
    order_id,
    gross_amount,
    first_name,
    last_name,
    email,
    phone,
  } = req.body;

  try {
    const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;

    let cardToken;

    // Step 1: Get card token from Midtrans API
    axios
      .post(
        "https://api.sandbox.midtrans.com/v2/token",
        {
          card_number,
          card_exp_month,
          card_exp_year,
          card_cvv,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${SERVER_KEY}`,
          },
        }
      )
      .then((cardTokenResponse) => {
        cardToken = cardTokenResponse.data;
        console.log("card token : ", cardToken);

        // Step 2: Create transaction using the card token
        const bodyRequest = {
          payment_type: "credit_card",
          transaction_details: {
            order_id,
            gross_amount,
          },
          customer_details: {
            first_name,
            last_name,
            email,
            phone,
          },
          credit_card: {
            token_id: cardToken,
            authentication: true, // Enable if using 3D Secure
          },
        };

        return axios.post(
          "https://api.sandbox.midtrans.com/v2/charge",
          bodyRequest,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${SERVER_KEY}`,
            },
          }
        );
      })
      .then((transactionResponse) => {
        res.status(201).json(transactionResponse.data);
      })
      .catch((error) => {
        console.error("Failed to create credit card transaction:", error);
        res.status(500).json({
          error: "Failed to create transaction",
          status: error.response.status + " " + error.response.statusText,
          description: error.response.data,
        });
      });
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createBankTransferTransaction = async (
  req: Request,
  res: Response
) => {
  const {
    order_id,
    gross_amount,
    bank_code,
    account_number,
    first_name,
    last_name,
    email,
    phone,
  } = req.body;

  try {
    const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;
    if (!SERVER_KEY) {
      throw new Error("Midtrans server key is not set");
    }

    const base64EncodedKey = Buffer.from(SERVER_KEY).toString("base64");

    const bodyRequest = {
      payment_type: "bank_transfer",
      transaction_details: {
        order_id: order_id,
        gross_amount: gross_amount,
      },
      bank_transfer: {
        bank: bank_code,
        account_number: account_number,
      },
      customer_details: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
      },
    };

    const transactionResponse = await axios.post(
      "https://api.sandbox.midtrans.com/v2/charge",
      bodyRequest,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${base64EncodedKey}`,
        },
      }
    );

    res.status(201).json(transactionResponse.data);
  } catch (error: any) {
    console.error("Failed to create bank transfer transaction:", error);
    res.status(500).json({
      error: "Failed to create bank transfer transaction",
      status: error.response?.status + " " + error.response?.statusText,
      description: error.response?.data,
    });
  }
};
