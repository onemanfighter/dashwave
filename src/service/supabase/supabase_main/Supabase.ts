// Import the functions you need from the SDKs you need
import { createClient } from "@supabase/supabase-js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Supabase configuration
const supabaseUrl = "https://derclltpzfohoecoxvge.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcmNsbHRwemZvaG9lY294dmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NDU2NjIsImV4cCI6MjAyMjAyMTY2Mn0.EDVPLpVX82RLxYlSv7ekIxcuXAP_fmEkzhOh67oXECk";
const Supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Auth
export const SupabaseAuth = Supabase.auth;

// Initialize users Database
const usersTable = "dashwave_users";
export const SupabaseUsersDB = Supabase.from(usersTable);

// Initialize Storage
export const SupabaseStorage = Supabase.storage;
