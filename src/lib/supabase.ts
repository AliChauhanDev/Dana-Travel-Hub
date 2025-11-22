import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Package {
  id: string;
  title: string;
  description: string;
  destination: string;
  duration: string;
  price: number;
  image_url: string;
  features: string[];
  category: string;
  available_slots: number;
  created_at: string;
  updated_at: string;
}

export interface BookingData {
  package_id: string;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  num_travelers: number;
  travel_date: string;
  special_requests: string;
}
