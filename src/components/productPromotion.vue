<template>
  <div class="product-promotion-card">
    <img :src="promotion.img" :alt="promotion.name" />
    <div class="promotion-details">
      <h3>{{ promotion.name }}</h3>
      <p>{{ promotion.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPromotionComponent',
  props: {
    promotion: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-promotion-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 16px;
  width: 400px;
}

.product-promotion-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 16px;
}

.promotion-details {
  flex: 1;
}

.promotion-details h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.promotion-details p {
  font-size: 16px;
}
</style>
