/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Import the functions you need from the SDKs you need
import { createClient } from "@supabase/supabase-js";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Supabase configuration
const supabaseUrl = "https://derclltpzfohoecoxvge.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcmNsbHRwemZvaG9lY294dmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NDU2NjIsImV4cCI6MjAyMjAyMTY2Mn0.EDVPLpVX82RLxYlSv7ekIxcuXAP_fmEkzhOh67oXECk";
const Supabase = createClient(supabaseUrl, supabaseKey);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Initialize Auth
const SupabaseAuth = Supabase.auth;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Initialize users Database
const usersTable = "dashwave_users";
const SupabaseUsersDB = Supabase.from(usersTable);

// Initialize Projects Database
const projectsTable = "dashwave_projects";
const SupabaseProjectsDB = Supabase.from(projectsTable);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Initialize Storage
const SupabaseStorage = Supabase.storage;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the functions
export { SupabaseAuth };
export { SupabaseUsersDB, SupabaseProjectsDB };
export { SupabaseStorage };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
