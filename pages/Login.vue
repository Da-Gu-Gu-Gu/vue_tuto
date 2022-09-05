<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="mx-auto tw-mt-10"
    style="width: 400px"
  >
    <validation-provider
      v-slot="{ errors }"
      name="Email"
      :rules="`required|email`"
    >
      <v-text-field
        v-model="email"
        label="Email"
        required
        :error-messages="errors"
      ></v-text-field>
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="Password"
      :rules="`required`"
    >
      <v-text-field
        v-model="password"
        label="Password"
        required
        :error-messages="errors"
      ></v-text-field>
    </validation-provider>

    <v-btn
      class="tw-mt-5 mx-auto tw-mx-auto tw-border-2 tw-border-red-400"
      color="primary"
      @click="resetValidation"
    >
      Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => {
    return {
      email:null,
      password:null,
    }
  },
  methods: {
    resetValidation() {
      this.$refs.form.resetValidation()
      return true
    },
  },
}
</script>

<style></style>
