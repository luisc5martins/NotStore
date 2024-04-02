<script setup>
import { useScreen } from '@/composables/screen';
import { useMonitor } from '@/composables/monitor';
import FooterDesk from './components/footer/FooterDesk.vue';
import FooterMobile from './components/footer/FooterMobile.vue';

const { isMobile } = useScreen();
const { menu } = useMonitor();

</script>

<template>
  <div>
    <component :is="menu" />
    <main>
      <router-view />
    </main>
    <FooterDesk v-if="!isMobile" />
    <FooterMobile v-if="isMobile" />
  </div>
</template>