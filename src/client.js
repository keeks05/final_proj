import { createClient } from '@supabase/supabase-js'

const URL = 'https://cjurfigjfbuifbmviwpd.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqdXJmaWdqZmJ1aWZibXZpd3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwODQwODksImV4cCI6MTk5NjY2MDA4OX0.HTtOrD6-eR_14g2DecB_wJK4NcTIZsVAw5_NqrsZVwE'
export const supabase = createClient(URL, API_KEY);