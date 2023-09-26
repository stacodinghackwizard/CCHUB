<template>
    <div>
        <div class="signUp">
            <form class="row g-3 w-50 bg-light rounded p-3">
                <h3 class="mb-2">Registration</h3>
                <div class="col-md-12">
                    <label for="inputText4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputText4">
                </div>
                <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-md-12">
                    <label for="inputPassword4" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="inputPassword4">
                </div>
                
                <div class="col-12 d-flex justify-content-between">
                <div class="form-check">
                    <input class="form-check-input checkbox" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                    I accept all terms & conditions
                    </label>
                </div>
                
                </div>
                <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary w-100">Register Now </button>
                </div>
                <div class="col-12 text-center">
                <p>Already have an account? <RouterLink to="/">Login Now</RouterLink></p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    
}
</script>