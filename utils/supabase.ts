import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://zltjxgueweobufzamksv.supabase.co"
const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdGp4Z3Vld2VvYnVmemFta3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDMzNTcsImV4cCI6MjAyODQxOTM1N30.mv-Os84_cQFKlMLRhpOT_tAdJn7EXg8-FVENdaIzr2E"

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);