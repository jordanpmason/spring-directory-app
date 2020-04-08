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
          <input  type="text" v-model="person.name" />
        </td>
        <td v-else @click="editMode(person.id)" class="person-name">{{ person.name }}</td>
        <td class="person-id">{{ person.id }}</td>
        <td v-if="editing == person.id">
          <button>Save</button>
          <button class="muted-button" @click="cancelEdit">Cancel</button>
        </td>
        <td v-else>
          <button @click="$emit('deletePerson', person.id)">Delete</button>
        </td>
      </tr>
    </table>
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
        editing: null
      }
    },
    methods: {
      editMode(personId) {
        this.editing = personId;
      },
      cancelEdit() {
        this.editing = null
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
</style>