<template>
  <v-card class="rounded-lg">
    <slot />
    <v-card-text class="pa-0">
      <slot name="content"></slot>
    </v-card-text>
    <v-card-actions class="pa-0">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
