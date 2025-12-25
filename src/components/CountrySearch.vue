<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8 text-center">Country Information</h1>

    <div class="flex justify-center mb-8">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a country..."
        class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        @keyup.enter="searchCountry"
      />
      <button
        @click="searchCountry"
        class="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>

    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>

    <div v-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>

    <div v-if="country" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img :src="country.flags.svg" :alt="country.name.common" class="w-full rounded-md" />
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-4">{{ country.name.common }}</h2>
        <p><strong>Capital:</strong> {{ country.capital[0] }}</p>
        <p><strong>Population:</strong> {{ country.population.toLocaleString() }}</p>
        <p><strong>Region:</strong> {{ country.region }}</p>
        <p><strong>Subregion:</strong> {{ country.subregion }}</p>
        <p><strong>Languages:</strong> {{ Object.values(country.languages).join(', ') }}</p>
        <p><strong>Currencies:</strong> {{ Object.values(country.currencies).map(c => c.name).join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CountrySearch',
  setup() {
    const searchQuery = ref('');
    const country = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const searchCountry = async () => {
      if (!searchQuery.value) {
        return;
      }

      loading.value = true;
      error.value = null;
      country.value = null;

      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchQuery.value}`);
        if (!response.ok) {
          throw new Error('Country not found');
        }
        const data = await response.json();
        country.value = data[0];
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    return {
      searchQuery,
      country,
      loading,
      error,
      searchCountry,
    };
  },
};
</script>

<style scoped>
</style>
