<template>
  <Header />
  <v-card width="600px" class="mx-auto mt-15">
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="mdi-account-circle"
          label="ユーザー名"
          v-model="name"
          autofocus
        />
        <v-text-field
          v-bind:type="showPassword ?  'text' : 'password'"
          v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          prepend-icon="mdi-lock"
          label="パスワード"
          v-model="password"
        />
      </v-form>
      <v-card-actions>
        <v-btn class="info" @click="onSubmit">ログイン</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import Header from './Header.vue';

const showPassword = ref(false);
const name = ref('');
const password = ref('');
const onSubmit = () => {
  console.log(name.value, password.value);
};
</script>