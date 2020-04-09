<template>
  <div id="person-form">
    <form @click.prevent="handleSubmit($event)">
      <input ref="nameInput" v-model="person.input" type="text" @focus="clearStatus" @keypress="clearStatus" />
      <p v-if="error && submitting" class="error-message">
        Please fill out all required fields
      </p>
      <p v-if="success" class="success-message">
        Person successfully added
      </p>
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
        },
        submitting: false,
        error: false,
        success: false
      }
    },
    methods: {
      handleSubmit(e) {
        this.submitting = true;
        this.clearStatus();

        if (this.invalidInput) {
          this.error = true;
          return;
        }

        if (e.target.name == 'add_person') {
          this.$emit('addPerson', this.person.input);
          this.success = true;
        } else if (e.target.name == 'find_person') {
          this.$emit('findPerson', this.person.input);
        }

        this.person.input = '';
        this.submitting = false;
        this.error = false;
      },
      clearStatus() {
        this.error = false;
        this.success = false;
      }
    },
    computed: {
      invalidInput() {
        return this.person.input == '';
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