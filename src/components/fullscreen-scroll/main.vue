<template>
  <div  @wheel="wheelEvent($event)">
      <transition-group :name="name" tag="div">
        <div v-for="(page,index) in pages" :key="index" class="block"
        :style="{'background-color':bgColor&&bgColor[index]?bgColor[index]:baseBgc}">
        </div>
      </transition-group>
  </div>
</template>

<script>
    export default {
      props: {
        pages:{
          type: Number,
          required: true
        },
        bgColor:{
          type: Array
        },
        baseBgc:{
          default: '#fff'
        }
      },
      data() {
        return {
          name: 'down'
        }
      },
      methods: {
        wheelEvent(e) {
          if (e.deltaY > 0) {
            this.name = 'down'
          }
          if (e.deltaY < 0) {
            this.name = 'up'
          }
        }
      }
    }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
  }

  .block {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .down-enter-active {
    transition: all 1s ease;
    transform: translateY(0);
  }

  .down-leave-active {
    transition: all 1s ease;
    transform: translateY(-100%);
  }

  .down-enter {
    transform: translateY(100%);
  }

  .down-leave {
    transform: translateY(0);
  }

  .up-enter-active {
    transition: all 1s ease;
    transform: translateY(0);
  }

  .up-leave-active {
    transition: all 1s ease;
    transform: translateY(100%);
  }

  .up-enter {
    transform: translateY(-100%);
  }

  .up-leave {
    transform: translateY(0);
  }

</style>