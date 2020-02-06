<template>
<div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-4">
        <div class="card-header">
          <p class="mb-0">Register</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" v-model="form.name" placeholder="Name" id="name" :class="{'is-invalid' : errors.name}">
              <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0]}}</div>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="form.email" placeholder="Email" id="email" :class="{'is-invalid' : errors.email}">
              <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0]}}</div>

            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" v-model="form.password" placeholder="Password" id="password" :class="{'is-invalid' : errors.password}">
              <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0]}}</div>

            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary btn-sm" value="Submit">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async register() {
              try {
                  await this.$axios.post('/auth/register', this.form);
                  this.$auth.login({data: this.form});
                  this.$router.push({name: 'index'});
              } catch(e) {

                }
            }
        }
    }
</script>

<style scoped>

</style>
