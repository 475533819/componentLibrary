<template>
  <div>
    <el-menu default-active="/form" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      @select="handleSelect">
      <el-menu-item index="/form">
        <el-icon><icon-menu /></el-icon>
        <span>表单</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const router = useRouter()
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleSelect = (index, indexPath, item, routeResult) => {
  console.log(index, indexPath, item, routeResult)
  router.push({
    path: index
  })
}
</script>

<style lang="less" scoped>
</style>
