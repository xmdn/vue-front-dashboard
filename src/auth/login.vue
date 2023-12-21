<template>
    <div class="login-container">
        <div class="card m-3">
            <h4 class="card-header">Login</h4>
            <div class="card-body">
                <form @submit.prevent="onSubmit"> <!-- use .prevent to stop page reload -->
                    <div class="form-group">
                        <label>Username</label>
                        <input v-model="username" type="text" class="form-control" :class="{ 'is-invalid': usernameError }" />
                        <div class="invalid-feedback">{{ usernameError }}</div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input v-model="password" type="password" class="form-control" :class="{ 'is-invalid': passwordError }" />
                        <div class="invalid-feedback">{{ passwordError }}</div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" :disabled="isSubmitting">
                            <span v-if="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                            Login
                        </button>
                        <router-link to="/register" class="btn btn-link">Register</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../js/auth';

const username = ref('');
const password = ref('');
const isSubmitting = ref(false);
const isLoggedIn = ref(false);
const router = useRouter();

const usernameError = computed(() => {
    return username.value.length > 4 ? '' : 'Username must be at least 5 characters';
});

const passwordError = computed(() => {
    return password.value.length > 8 ? '' : 'Password must be at least 9 characters';
});

async function onSubmit() {
    console.log('SENDED');
    if (username.value.length > 4 && password.value.length > 8) {
        // Here you would usually check credentials against an API
        // For this example, we'll just log the user in
        isSubmitting.value = true;
        login();
        // Set a timeout to simulate an API call
        setTimeout(() => {
            isSubmitting.value = false;
            isLoggedIn.value = true; // Set the user as logged in
            router.push('/').catch(error => {
            console.error('Router navigation error:', error);
            });
        }, 1000);
    }
}
</script>
<style>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    background-color: #f5f5f5; 
}
</style>