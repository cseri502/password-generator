<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CheckBox from './components/CheckBox.vue';
import Reference from './components/Reference.vue';

const currentIcon = ref(['far', 'copy'])
const password = ref('')
const passwordLength = ref(20)
const includeLower = ref(true)
const includeUpper = ref(false)
const includeNumbers = ref(true)
const includeSymbols = ref(false)

onMounted(() => {
  password.value = genPassword()
})

function setState(data: [string, boolean]): void {
  const eventName = data[0], state = data[1]

  if (eventName === 'incUpper') includeUpper.value = state
  if (eventName === 'incLower') includeLower.value = state
  if (eventName === 'incNums') includeNumbers.value = state
  if (eventName === 'incSymbols') includeSymbols.value = state
}

function genPassword(): string {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  let allowedChars = '',
    password = '';

  if (includeUpper.value) allowedChars += upperChars;
  if (includeLower.value) allowedChars += lowerChars;
  if (includeNumbers.value) allowedChars += numberChars;
  if (includeSymbols.value) allowedChars += symbolChars;

  for (let i = 0; i < passwordLength.value; i++) {
    const rndIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[rndIndex];
  }

  return password;
}

async function copyPassword(): Promise<void> {
  try {
    await navigator.clipboard.writeText(password.value);
    alert('The password was copied to your clipboard!');
  } catch (err) {
    alert('An unexpected error happened during writing.');
  }
}
</script>

<template>
  <div class="h-screen w-full flex justify-center items-center bg-teal-50 selection:bg-teal-100">
    <form class="m-2 md:m-0 w-full max-w-lg p-5 text-center bg-white shadow-lg shadow-black/20 rounded-md">

      <!-- Personal website URLs; references to other projects. -->

      <Reference />

      <!-- App header section -->

      <p class="mt-2 text-gray-900 font-semibold text-lg">Password generator</p>
      <img src="/padlock.png" class="block m-auto my-5 w-16 h-16 duration-200 hover:brightness-75"
        title="Password icons created by Smashicons - Flaticon" alt="Lock" draggable="false">

      <!-- Created password; can be copied. -->

      <div class="relative flex flex-row justify-between items-center border-b border-teal-500 py-2">
        <input type="text" disabled :value="password"
          class="appearance-none bg-transparent border-none w-full text-gray-500 text-center mr-3 py-1 px-2 leading-tight focus:outline-none">
        <font-awesome-icon :icon="currentIcon"
          class="absolute right-0 m-2 text-teal-500 text-lg hover:text-teal-700 cursor-pointer transition-all duration-200"
          @mouseover="() => currentIcon = ['fas', 'copy']" @mouseleave="() => currentIcon = ['far', 'copy']"
          @click="copyPassword" />
      </div>

      <!-- Password settings -->

      <div class="mt-5 border-b border-teal-500 py-2">
        <label for="pw-length-range" class="block text-sm font-medium text-gray-900 text-left"
          v-text="`Password length (${passwordLength})`"></label>
        <input id="pw-length-range" type="range" v-model="passwordLength" step="1" min="8" max="32"
          class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500">

        <div class="grid grid-rows-2 grid-flow-col gap-4">

          <CheckBox @share-state="(data: [string, boolean]) => setState(data)" :value="false"
            input-id="uppercase-checkbox" helper-id="helper-uppcercase" label="Include uppercase letters."
            helper-text="The password will include letters such as 'A' and 'Z'." event="incUpper" />

          <CheckBox @share-state="(data: [string, boolean]) => setState(data)" :value="true" input-id="lowercase-checkbox"
            helper-id="helper-lowercase" label="Include lowercase letters."
            helper-text="The password will include letters such as 'b' and 'k'." event="incLower" />

          <CheckBox @share-state="(data: [string, boolean]) => setState(data)" :value="true" input-id="number-checkbox"
            helper-id="helper-number" label="Include numbers."
            helper-text="The password will include numbers from 0 to 9." event="incNums" />

          <CheckBox @share-state="(data: [string, boolean]) => setState(data)" :value="false" input-id="include-checkbox"
            helper-id="helper-include" label="Include symbols."
            helper-text="The password will include symbols such as '$', '#' and '?'." event="incSymbols" />

        </div>
      </div>

      <!-- Generate password -->

      <button
        class="mt-5 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button" @click="() => password = genPassword()">
        Generate password
      </button>
    </form>
  </div>
</template>