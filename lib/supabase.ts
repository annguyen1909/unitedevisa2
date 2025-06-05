// lib/supabase.ts

// Import createClient for use locally
import { createClient } from '@supabase/supabase-js';

// Use it to create the Supabase client
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

