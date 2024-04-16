<template>
  <div>
    <label for="username">input username</label>
    <input type="text" name="username" class="username" />
    <label for="password">input password</label>
    <input type="text" name="password" class="password" />
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  'https://zltjxgueweobufzamksv.supabase.co',
  '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdGp4Z3Vld2VvYnVmemFta3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDMzNTcsImV4cCI6MjAyODQxOTM1N30.mv-Os84_cQFKlMLRhpOT_tAdJn7EXg8-FVENdaIzr2E>'
)
</script>

<style lang="scss" scoped></style>
