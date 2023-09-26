<template>
    <div>
        <logInPage/>
        <SignUp/>
    </div>
</template>

<script>
import logInPage from "../../components/loginPage/logInPage.vue";
import SignUp from "../../components/loginPage/SignUp.vue"; 
export default {
    
    name: 'LoginComponent',

    components: {
        logInPage,
        SignUp,
    }
}
</script>