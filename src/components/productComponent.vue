<template>
  <div class="product-card">
    <img :src="product.img" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button>Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 200px;
}

.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 16px;
}

.product-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.product-card p {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}

.product-card button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
