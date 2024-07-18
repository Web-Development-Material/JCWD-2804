export interface Transaction {
  transaction_id: number;
  user_id: number;
  hotel_id: number;
  booking_date: Date;
  nights: number;
  total_amount: number;
}
