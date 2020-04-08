<template>
  <div id="person-form">
    <form @click.prevent="handleSubmit($event)">
      <input ref="nameInput" v-model="person.input" type="text" />
      <button type="submit" name="add_person" value="Add Person">Add Person</button>
      <button type="submit" name="find_person" value="Find Person By ID">Find Person By ID</button>
      <button @click="$emit('findAll')">Find All</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "PersonForm",
    data () {
      return {
        person: {
          input: ''
        }
      }
    },
    methods: {
      handleSubmit(e) {
        if (e.target.name == 'add_person') {
          this.$emit('addPerson', this.person.input);
        } else if (e.target.name == 'find_person') {
          this.$emit('findPerson', this.person.input);
        }
      }
    }
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