<template>
  <UContainer class="grid place-content-center h-screen">
      <UCard class="w-[500px]">
          <template #header>
            <h2 class="text-xl font-bold">Register</h2>
          </template>
          <UForm :state="formState" :schema="schema" class="space-y-4" @submit="onSubmit">
            

            <UFormGroup name="name" label="Name" required>
              <UInput type="text" placeholder="John Doe" v-model="formState.name" />
            </UFormGroup>
            
            <UFormGroup name="email" label="Email" class="mt-4" required>
              <UInput placeholder="you@example.com" icon="i-heroicons-envelope" v-model="formState.email" />
            </UFormGroup>

            <UFormGroup name="password" label="Password" class="mt-4" required>
              <UInput  type="password" v-model="formState.password"/>
            </UFormGroup>

            <UFormGroup name="password_confirmation" label="Password Confirmation" class="mt-4" required>
              <UInput  type="password" v-model="formState.password_confirmation" />
            </UFormGroup>


            <UButton type="submit" class="w-full mt-3">Register</UButton>
          </UForm>
      </UCard>
  </UContainer>
</template>
<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import {schema} from './schemas/FormSchema'


type Schema = z.output<typeof schema>

const formState= ref({
  email:'',
  name:'',
  password:'',
  password_confirmation:''
});

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>

