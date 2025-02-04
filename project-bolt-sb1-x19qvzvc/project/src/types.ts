// Existing types...

export interface Subscription {
  id: string;
  name: string;
  price: number;
  features: string[];
  duration: number; // in months
}

export interface AdminStats {
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  popularMovies: {
    movieId: number;
    views: number;
  }[];
}