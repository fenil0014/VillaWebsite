/*
# Create booking inquiries table for Smiling Sparrows villa

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — guest name
  - `email` (text, not null) — guest email
  - `phone` (text) — guest phone number
  - `check_in` (date) — requested check-in date
  - `check_out` (date) — requested check-out date
  - `guests` (int, default 2) — number of guests
  - `message` (text) — optional message from guest
  - `status` (text, default 'pending') — inquiry status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `inquiries`.
- Allow anon + authenticated to INSERT (guests can submit inquiries without an account).
- Allow anon + authenticated to SELECT so the site can display inquiry count if needed.
- No UPDATE or DELETE from the frontend.

3. Notes
- This is a single-tenant, no-auth app. No user_id columns.
- Guests submit inquiries without signing in.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  check_in date,
  check_out date,
  guests int DEFAULT 2,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
CREATE POLICY "anon_select_inquiries" ON inquiries FOR SELECT
  TO anon, authenticated USING (true);
