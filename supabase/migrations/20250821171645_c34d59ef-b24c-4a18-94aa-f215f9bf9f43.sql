-- 1) Add new columns to profiles if they don't exist
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS country_of_origin text,
  ADD COLUMN IF NOT EXISTS years_in_chile text;

-- 2) Update the signup handler to also copy new metadata fields
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    country_of_origin,
    years_in_chile
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    NULLIF(NEW.raw_user_meta_data ->> 'country_of_origin', ''),
    NULLIF(NEW.raw_user_meta_data ->> 'years_in_chile', '')
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = EXCLUDED.full_name,
    country_of_origin = EXCLUDED.country_of_origin,
    years_in_chile = EXCLUDED.years_in_chile,
    updated_at = now();
  RETURN NEW;
END;
$$;

-- 3) Ensure the trigger exists on auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();