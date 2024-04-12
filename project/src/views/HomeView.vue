<template>
  <div></div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  'https://zltjxgueweobufzamksv.supabase.co',
  '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdGp4Z3Vld2VvYnVmemFta3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDMzNTcsImV4cCI6MjAyODQxOTM1N30.mv-Os84_cQFKlMLRhpOT_tAdJn7EXg8-FVENdaIzr2E>'
)
</script>

<style lang="scss" scoped></style>
