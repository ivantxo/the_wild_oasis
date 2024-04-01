import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pxhbjigrvwlrbvjyinty.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4aGJqaWdydndscmJ2anlpbnR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0ODA2NTgsImV4cCI6MjAyNzA1NjY1OH0.2nTJ8MsFiNgPxhMw-6gGKghbe_ItGNnGs3y65nFuF4M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
