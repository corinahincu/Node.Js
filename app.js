const app = Vue.createApp({
  // root component
  // data, fucntions 
 /* template: '<h2> I am the template </h2>' */
  
  data() {
    return{
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45
    }
  },
  methods: {
    changeTitle(title) {
      /* console.log('you clicked me') */
      /* this.title = 'Words of Randiance' */
      this.title = title
    }
  }
})

app.mount('#app')