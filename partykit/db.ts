import { createClient } from "@supabase/supabase-js";
import { env } from "cloudflare:workers";

export const supabase =
  env.SUPABASE_URL != null && env.SUPABASE_URL != ""
    ? createClient(env.SUPABASE_URL as string, env.SUPABASE_KEY as string, {
        auth: { persistSession: false },
      })
    : null;
