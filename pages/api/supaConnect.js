import { createClient } from "@supabase/supabase-js";

let supakey = process.env.NEXT_PUBLIC_SUPAKEY;
let supaurl = process.env.NEXT_PUBLIC_SUPAURL;

export let supabase = createClient(supaurl, supakey);