import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yimxdxtrrbvhjgxgfyxy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbXhkeHRycmJ2aGpneGdmeXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1NzkwNDgsImV4cCI6MjEwNjE1NTA0OH0.PlcrhtG-8NwT-fwm1RRR4KhROXkk5iMoOoI0P_tam6w';

export const supabase = createClient(supabaseUrl, supabaseKey);
