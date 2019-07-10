<template>
    <div class="app-container">
    <mt-header fixed class="kitty-color" title="数码商城"></mt-header>
  <nav class="mui-bar mui-bar-tab kitty-color">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    </div>
</template>

<script>
export default {

  
};
</script>


<style lang="scss" scoped>
    .kitty-color{
        background-color: #f46
    }
    .mint-header {
     z-index: 99;
    }
   .app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  }

</style>
