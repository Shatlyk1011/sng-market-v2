<template>
  <Teleport to="body">
    <div class="modal">I'm modal</div>
  </Teleport>
</template>

<script>
export default {};
</script>

<style>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.6rem 2.4rem;
}
</style>