<template>
  <div>
    <InputTaskCard />
    <ShowTaskListCard />
  </div>
</template>

<script lang="ts">
import InputTaskCard from "~/components/InputTaskCard.vue";
import ShowTaskListCard from "~/components/ShowTaskListCard.vue";
export default { components: { InputTaskCard, ShowTaskListCard } };
</script>
