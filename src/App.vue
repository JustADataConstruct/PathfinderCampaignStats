<template>
  <div class="header">
    <h1>
      PATHFINDER STATS
    </h1>
    <p>Click a character</p>
  </div>
  <div v-if="stats_array" class="grid">
    <div class="col">
      <CharCard name='Henry' color=#f0af0faa :stats_array="stats_array" />
    </div>
    <div class="col">
      <CharCard name='Lahabrea' color=#4085afaa :stats_array="stats_array" />
    </div>
    <div class="col">
      <CharCard name='Lia' color=#535654aa :stats_array="stats_array" />
    </div>
    <div class="col">
      <CharCard name='Nýr' color=#3A5F0Baa :stats_array="stats_array" />
    </div>
  </div>
  <div v-else>
    <ProgressSpinner />
  </div>
  <div class="footer">Yaru 2024</div>
</template>

<script setup lang="ts">
import CharCard from './components/CharCard.vue';
import { supabase } from './lib/supabaseClient';
import { Stats } from './components/CharCard.vue';
import { ref } from 'vue';

const stats_array = ref<Stats[] | null>(null);

base_test();

async function base_test() {
  const { data } = await supabase.from('rolls').select().returns<Stats[]>();
  stats_array.value = data;
}


</script>

<style scoped>
.header {
  font-family: "Balthazar", serif;
  font-weight: 400;
  font-style: normal;
  color: red;
  text-shadow: 1px 1px 24px black;
}

.footer {
  position: fixed;
  text-align: center;
  width: 100%;
  left: 0;
  bottom: 0;
  font-family: "Balthazar", serif;
  font-weight: 400;
  font-style: normal;
  color: red;
}
</style>
