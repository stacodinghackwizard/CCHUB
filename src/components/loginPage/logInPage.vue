<template>
    <div>
        <div class="login">
            <form @submit.prevent="login" class="row g-3 w-50 bg-light rounded p-3">
                <h3 class="mb-2">Login</h3>
                <div class="col-md-12">
                <label for="loginEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="loginEmail4" v-model="email">
                </div>
                <div class="col-md-12">
                <label for="loginPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="loginPassword4" v-model="password">
                </div>
                
                <div class="col-12 d-flex justify-content-between">
                <div class="form-check">
                    <input class="form-check-input checkbox" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                    Remember me
                    </label>
                </div>
                <div>
                    <a class="text-success"><span>Forget Password</span></a>
                </div>
                </div>
                <div class="col-12 text-center">
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </div>
                <div class="col-12 text-center">
                <p>Don't have a account? <button class="signBut"><RouterLink to="SignUp">Sign Up</RouterLink></button></p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'logInPage',
    

    data(){
        return{
            email: 'ayomide@gmail.com',
            password: 'ayomide',
        }
    },

    methods: {
        login() {
        // Perform authentication logic here
        // Example: check username and password
        if (this.email === 'ayomide@gmail.com' && this.password === 'ayomide') {
            // Redirect to home page after successful login
            this.$router.push('/HomePage');
        } else {
            // Handle authentication error
            console.log('Authentication failed');
        }
        },
    }

}
</script>