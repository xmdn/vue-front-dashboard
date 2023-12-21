<template>
  <div class="layout-container">
      <!-- Only show the header and menu if not on login/register page -->
      <header v-if="!isAuthPage" class="page-header bg-primary">
          <!-- header content -->
      </header>
      <AppMenu v-if="!isAuthPage" :class="{ collapsed: collapsed }"></AppMenu>

      <div class="full-page-container" v-if="isAuthPage">
          <router-view/>
      </div>
      
      <!-- Only show the page container if not on login/register page -->
      <div v-else :class="['page-container', { 'content-collapsed': collapsed?.value }]" :style="{ marginLeft: mainContentMargin }">
          <transition name="fade" mode="out-in">
              <keep-alive include="dashboard">
                  <router-view/>
              </keep-alive>
          </transition>
      </div>
  </div>
</template>

<script>
import { watch, computed } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter
import { useStore } from 'vuex';
import AppMenu from '../menu/Menu.vue';



export default {
  components: {
    AppMenu
  },
  setup() {
    const store = useStore();
    const isCollapsed = computed(() => store.state.collapsed);

    const mainContentMargin = computed(() => {
      return isCollapsed.value ? '4rem' : '17rem'; // Adjust these values
    });

    watch(isCollapsed, (newValue) => {
      console.log('Collapsed state changed in LayoutPage:', newValue);
    });

    const router = useRouter(); // Use the imported useRouter to create the router instance

    // Computed property to determine if the current route is for authentication pages
    const isAuthPage = computed(() => {
      const routeName = router.currentRoute.value.name;
      const authPage = routeName === 'login' || routeName === 'register';
      console.log(`Is Auth Page: ${authPage}`); // This should log true or false when the route changes
      return authPage;
    });


    // // If you need to perform actions when 'collapsed' changes, use newValue and oldValue
    // watch(collapsed, () => {
    //   // If you don't need the old and new values, you can omit them
    //   // Example action:
    //   // console.log('collapsed state changed');
    // });
    watch('$route', (newRoute) => {
      console.log(`Route changed to: ${newRoute.path}`); // This should log the new route path
      this.currentPage = newRoute.name;
    });
    
    
    return {
      mainContentMargin,
      isAuthPage
    };
  },
  name: 'LayoutPage',
  data() {
    return {
      currentPage: 'model'
    }
  },
  watch: {
    '$route': {
      deep: true,
      handler: function (newPage) {
        this.currentPage = newPage.name;
      }
    }
  }
}
</script>

<style scoped>
.full-page-container {
  width: 100vw;
  height: 100vh;
}

.menu {
  /* existing styles */
}

.page-container {
  transition: margin-left 0.3s;
  /* existing styles */
}

/* Other styles */
</style>
