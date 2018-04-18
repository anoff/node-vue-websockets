<template>
<div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <span class="md-title">My Chat App</span>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <md-field>
          <label>Active users: {{ count }}</label>
          <md-textarea v-model="textarea" disabled></md-textarea>
        </md-field>
        <md-field>
          <label>Your message</label>
          <md-input v-model="message"></md-input>
          <md-button class="md-primary md-raised" v-on:click="sendMessage()">Submit</md-button>
        </md-field>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      textarea: '',
      message: '',
      count: 0
    }
  }, sockets:{
    connect () {
      console.log('connected to chat server')
    },
    count (val) {
      this.count = val.count
      console.log(val)
    },
    message (data) {
      this.textarea += data + '\n'
    }
  }, methods: {
    sendMessage () {
      this.$socket.emit('message', this.message)
      this.message = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-app {
  height: 800px;
  border: 1px solid rgba(#000, .12);
}
.md-textarea {
  height: 300px;
}
</style>
