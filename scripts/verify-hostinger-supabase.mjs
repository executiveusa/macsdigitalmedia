import { createClient } from "@supabase/supabase-js";

const url = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/$/, "");
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  console.error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
  process.exit(1);
}

const supabase = createClient(url, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    detectSessionInUrl: false,
    persistSession: false,
  },
  global: {
    headers: {
      "X-Client-Info": "macsdigitalmedia-connection-verifier",
    },
  },
});

const { count, error } = await supabase
  .from("founding_applications")
  .select("id", { count: "exact", head: true });

if (error) {
  console.error(`Supabase verification failed: ${error.message}`);
  process.exit(1);
}

console.log(`Supabase connection verified. founding_applications rows: ${count ?? 0}`);
