export interface Review {
  id: string;
  rating: number;
  comment: string;
  date: Date | string;
  userId: string;
}
