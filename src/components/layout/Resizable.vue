<template>
  <div class="hw-wrap">
    <CommonHeader/>
    <div class="hw-container">
      <div ref="split_item_left" class="split-item left" :style="{width: `${width}px`}">
        <Sidebar customClass="resizable"/>
      </div>
      <div
        ref="split_gutter"
        v-draggable="draggableValue"
        class="split-gutter"
        :style="{left: `${width}px`}"
        @dblclick="toggle"
        v-b-tooltip.hover.right.nofade.html="{customClass: 'tooltip-sidebar-guide'}"
        title="드래그하여 메뉴 영역 확대/축소<br>더블클릭으로 숨김 가능"
      >&nbsp;</div>
      <div v-show="fullScreen" @click="toggle" class="re-open-sidebar"><i class="far fa-ellipsis-v"></i></div>
      <div
        ref="split_item_right"
        class="split-item right"
        :style="{width: `calc(100% - ${width}px)`}"
      >
        <main class="hw-main">
        <slot/>
      </main>
      </div>
    </div>
    <CommonFooter/>
  </div>
</template>

<script>
import { Draggable } from "draggable-vue-directive";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    CommonHeader,
    CommonFooter,
    Sidebar
  },
  data() {
    return {
      width: 280,
      widthBeforeHide: 280,
      draggableValue: {
        onPositionChange: this.changeWidth,
        onDragStart: this.dragStartFunc,
        onDragEnd: this.dragEndFunc,
        initialPosition: {
          left: 280,
          top: 65
        },
        boundingRect: {
          left: 280,
          right: 500
        }
      }
    };
  },
  computed: {
    fullScreen() {
      return (this.width != 0) ? false : true;
    }
  },
  directives: {
    Draggable
  },
  watch: {
    fullScreen(val) {
      if(val) {
        this.$refs.split_gutter.style.left = "-20px";
        this.$refs.split_item_left.style.pointerEvents = "none";
        this.$refs.split_item_left.style.transition = "width 0.2s";
        this.$refs.split_item_right.style.transition = "width 0.2s";
      }
    }
  },
  methods: {
    changeWidth(positionDiff, absolutePosition) {
      this.width = absolutePosition.left;
    },
    toggle() {
      if (!this.fullScreen) {
        // close
        this.widthBeforeHide = this.width;
        this.width = 0;
      } else {
        // open
        this.width = this.widthBeforeHide;
        this.$refs.split_gutter.style.left = `${this.widthBeforeHide}px`;
        setTimeout(() => {
          this.$refs.split_item_left.style.pointerEvents = "auto";
          this.$refs.split_item_left.style.transition = "width 0s";
          this.$refs.split_item_right.style.transition = "width 0s";
        }, 600);
      }
    },
    dragStartFunc() {
      // disable and hide ALL tooltips
      this.$root.$emit("bv::hide::tooltip");
      this.$root.$emit("bv::disable::tooltip");
    },
    dragEndFunc() {
      this.$root.$emit("bv::enable::tooltip");  // enable ALL tooltips
    }
  },
};
</script>

<style lang="scss">
.hw-container {
  @include clearfix();
}
</style>
<style lang="scss">
.split-item {
  float: left;
  height: 100%;
  will-change: width;
  &.left {
    overflow: hidden;
  }
  &.right {
    overflow: auto;
  }
}

.split-gutter {
  position: fixed;
  z-index: 1010;
  top: $headerHeight !important;
  bottom: $footerHeight !important;
  width: 16px;
  transition: border-color 0.3s;
  border-left: 4px solid rgba(#dbdbdb, 0);
  will-change: left;
  font-size: 0;
  &:hover {
    cursor: e-resize;
    border-left: 4px solid rgba(#dbdbdb, 1);
  }
}

.re-open-sidebar {
  position: fixed;
  z-index: 1010;
  top: $headerHeight;
  bottom: $footerHeight;
  left: 0;
  width: 16px;
  background-color: rgba(#9FA6AD, 0);
  transition: background-color 0.3s, color 0.3s;
  font-size: 24px;
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #909090;
    background-color: rgba(#9FA6AD, 0.3);
    cursor: pointer;
  }
}

.tooltip-sidebar-guide {
  .tooltip-inner {
    text-align: left;
    max-width: none;
  }
}

.hw-sidebar {
  &.resizable {
    height: 100%;
  } 
}
</style>
