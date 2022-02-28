<template>
  <div
    class="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100"
  >
    <map-pin-icon size="1x" class="text-neutral-800"></map-pin-icon>
  </div>
</template>

<script>
import { MapPinIcon } from 'vue-feather-icons'

export default {
  components: {
    MapPinIcon,
  },
}
</script>
