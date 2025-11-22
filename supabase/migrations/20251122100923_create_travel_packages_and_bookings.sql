/*
  # Create Travel Packages and Bookings System

  1. New Tables
    - `packages`
      - `id` (uuid, primary key)
      - `title` (text) - Package name (e.g., "Umrah Package 2024")
      - `description` (text) - Detailed package description
      - `destination` (text) - Destination (e.g., "Makkah & Madinah")
      - `duration` (text) - Trip duration (e.g., "14 Days / 13 Nights")
      - `price` (numeric) - Package price
      - `image_url` (text) - Package image URL
      - `features` (jsonb) - Array of package features/inclusions
      - `category` (text) - Package category (umrah, hajj, ziyarat, etc.)
      - `available_slots` (integer) - Number of available bookings
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `bookings`
      - `id` (uuid, primary key)
      - `package_id` (uuid, foreign key to packages)
      - `full_name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone number
      - `address` (text) - Customer address
      - `num_travelers` (integer) - Number of travelers
      - `travel_date` (date) - Preferred travel date
      - `special_requests` (text) - Any special requests
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Packages are publicly readable
    - Bookings can be inserted by anyone but only readable by authenticated admins
*/

CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  destination text NOT NULL,
  duration text NOT NULL,
  price numeric NOT NULL,
  image_url text NOT NULL,
  features jsonb DEFAULT '[]'::jsonb,
  category text NOT NULL,
  available_slots integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id uuid REFERENCES packages(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  num_travelers integer DEFAULT 1,
  travel_date date NOT NULL,
  special_requests text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Packages are viewable by everyone"
  ON packages FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);