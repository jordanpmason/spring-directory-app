<template>
  <div id="person-form">
    <form>
      <input ref="nameInput" type="text" />
      <button type="submit" name="add_person" value="Add Person">Add Person</button>
      <button type="submit" name="update_person" value="Find Person By ID">Find Person By ID</button>
      <button @click="$emit('findAll')">Find  All</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "PersonForm"
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }

  [class*='-message'] {
    font-weight: 500;
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }
</style>