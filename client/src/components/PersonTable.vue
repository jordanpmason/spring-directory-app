<template>
  <div id="person-table">
    <p v-if="false" class="empty-table">No people to list</p>
    <table v-else>
      <thead>
      <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tr v-for="person in people" :key="person.id">
        <td v-if="editing == person.id">
          <input  type="text" v-model="person.name" @focus="clearStatus" @keypress="clearStatus" />
        </td>
        <td v-else @click="editMode(person.id)" class="person-name">{{ person.name }}</td>
        <td class="person-id">{{ person.id }}</td>
        <td v-if="editing == person.id">
          <button @click="editPerson(person.id, person.name)">Save</button>
          <button class="muted-button" @click="cancelEdit">Cancel</button>
        </td>
        <td v-else>
          <button @click="$emit('deletePerson', person.id)">Delete</button>
        </td>
      </tr>
    </table>
    <p v-if="error && submitting" class="error-message">
      Please submit a valid name
    </p>
    <p v-if="success" class="success-message">
      Name successfully changed
    </p>
  </div>
</template>

<script>
  export default {
    name: "PersonTable",
    props: {
      people: Array
    },
    data () {
      return {
        editing: null,
        submitting: false,
        error: false,
        success: false,
      }
    },
    methods: {
      editMode(personId) {
        this.editing = personId;
      },
      cancelEdit() {
        this.editing = null;
        this.clearStatus();
        this.$emit('cancelEdit');
      },
      editPerson(personId, newPersonName) {
        this.submitting = true;
        this.clearStatus();

        if(newPersonName == '') {
          this.error = true;
          return;
        }

        this.$emit('editPerson', personId, newPersonName);
        this.editing = null;
        this.submitting = false;
        this.error = false;
        this.success = true;
      },
      clearStatus() {
        this.error = false;
        this.success = false;
      }
    }
  }
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }

  #person-table input {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }

  .person-name {
    cursor: pointer;
  }

  .person-id {
    cursor: not-allowed;
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