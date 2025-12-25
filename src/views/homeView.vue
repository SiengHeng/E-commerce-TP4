<template>
  <div class="home-view">
    <div class="promotions-section">
      <h2>Promotions</h2>
      <div class="promotion-grid">
        <PromotionComponent
          v-for="promotion in promotions"
          :key="promotion.title"
          :promotion="promotion"
        />
      </div>
    </div>

    <div class="categories-section">
      <h2>Categories</h2>
      <div class="categories-grid">
        <CategoryComponent v-for="category in categories" :key="category.name" :category="category" />
      </div>
    </div>

    <div class="products-section">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <ProductComponent v-for="product in products" :key="product.name" :product="product" />
      </div>
    </div>

    <div class="product-promotions-section">
      <h2>Product Promotions</h2>
      <div class="product-promotion-grid">
        <ProductPromotionComponent v-for="promotion in productPromotions" :key="promotion.name" :promotion="promotion" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryComponent from '../components/categoryComponent.vue';
import PromotionComponent from '../components/promotionComponent.vue';
import ProductComponent from '../components/productComponent.vue';
import ProductPromotionComponent from '../components/productPromotion.vue';

export default {
  name: 'HomeView',
  components: {
    CategoryComponent,
    PromotionComponent,
    ProductComponent,
    ProductPromotionComponent,
  },
  data() {
    return {
      categories: [
        { name: 'Cake & Milk', productCount: 14, color: '#F2FCE4', img: 'src/assets/images/Cake&Milk.png' },
        { name: 'Peach', productCount: 17, color: '#FFFCEB', img: 'src/assets/images/Peach.png' },
        { name: 'Oganic Kiwi', productCount: 21, color: '#ECFFEC', img: 'src/assets/images/kiwi.png' },
        { name: 'Red Apple', productCount: 68, color: '#FEEFEA', img: 'src/assets/images/Red_apple.png' },
        { name: 'Snack', productCount: 34, color: '#FFF3EB', img: 'src/assets/images/Snack.png' },
        { name: 'Black Plum', productCount: 25, color: '#FFF3FF', img: 'src/assets/images/Black Plum.png' },
        { name: 'Vegetable', productCount: 65, color: '#F2FCE4', img: 'src/assets/images/Vegetable.png' },
        { name: 'Headphone', productCount: 33, color: '#FFFCEB', img: 'src/assets/images/Headphone.png' },
        { name: 'Cafe & Milk', productCount: 54, color: '#F2FCE4', img: 'src/assets/images/Cafe&Milk.png' },
        { name: 'Orange', productCount: 63, color: '#FFF3FF', img: 'src/assets/images/Orange.png' },
      ],
      promotions: [
        { title: 'Everyday Fresh & Clean with Our Products', btnColor: '#3BB77E', color: '#F0E9D7', img: 'src/assets/images/Onion.png', buttonColor: '#42B678', url: '/promotions/1' },
        { title: 'Make your Breakfast Healthy and Easy', btnColor: '#3BB77E', color: '#F2E8E9', img: 'src/assets/images/Cake&Milk Promotion.png', buttonColor: '#42B678', url: '/promotions/2' },
        { title: 'The best Organic Products Online', btnColor: '#FDC040', color: '#E6EAF3', img: 'src/assets/images/Organic.png', buttonColor: '#FBC040', url: '/promotions/3' },
      ],
      products: [
        { name: 'Product 1', price: '$10', img: 'src/assets/images/Red_apple.png' },
        { name: 'Product 2', price: '$20', img: 'src/assets/images/Peach.png' },
        { name: 'Product 3', price: '$30', img: 'src/assets/images/Orange.png' },
      ],
      productPromotions: [
        { name: 'Promotion 1', description: '50% off on all products', img: 'src/assets/images/Snack.png' },
        { name: 'Promotion 2', description: 'Buy 1 get 1 free', img: 'src/assets/images/Cake&Milk.png' },
      ],
    };
  },
};
</script>

<style scoped>
.home-view {
  padding: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.categories-grid,
.promotion-grid,
.product-grid,
.product-promotion-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
