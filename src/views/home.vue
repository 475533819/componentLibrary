<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from '../components/menu/index.vue'
import Header from '../components/header/index.vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="less" scoped>
.common-layout {
  .el-header {
    padding: 0;
  }
}
</style>
