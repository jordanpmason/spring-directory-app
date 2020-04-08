<template>
  <div id="app" class="small-container">
    <h1>Spring Boot Client</h1>
    <PersonForm @addPerson="createPerson" @findAll="getAllPeople" @findPerson="getPerson" />
    <PersonTable :people="people" />
  </div>
</template>

<script>
import PersonForm from './components/PersonForm.vue'
import PersonTable from './components/PersonTable.vue'
import api from './Api';

export default {
  name: 'App',
  components: {
    PersonForm,
    PersonTable
  },
  data() {
    return {
      people: []
    }
  },
  mounted() {
    this.getAllPeople()
  },
  methods: {
    createPerson(personName) {
      api.insertPerson(personName)
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
        this.getAllPeople();
      });
    },
    getAllPeople() {
      api.getAll()
      .then(response => {
        this.people = response.data;
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
      })
    },
    getPerson(personId) {
      api.getById(personId)
      .then(response => {
        this.people = [];
        this.people.push(response.data);
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
      })
    }
  }
}
</script>

<style>
  button, button[type=submit] {
    background: #009435;
    border: 1px solid #009435;
    margin: 0 0.5rem 0 0;
  }

  .small-container {
    max-width: 680px;
  }
</style>
