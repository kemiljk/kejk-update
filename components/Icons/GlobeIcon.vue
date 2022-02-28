<template>
  <div
    class="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100"
  >
    <globe-icon size="1x" class="text-teal-800" />
  </div>
</template>

<script>
import { GlobeIcon } from 'vue-feather-icons'

export default {
  components: {
    GlobeIcon,
  },
}
</script>
