<template>
    <i :class="cls"></i>
</template>

<script>
export default {
  data() {
    return {
      //
    }
  },
  props: {
    clsName: {
      type: String,
      default: ''
    }
  },
  computed: {
    cls() {
      return ['icon', 'icon-' + this.clsName].join(' ')
    }
  }
}
</script>

<style scoped>
i.icon {
  font-size: 56px;
  color: #ccc;
}
@font-face {
  font-family: 'icomoon';
  src: url('fonts/icomoon.ttf?eizcrq') format('truetype'),
    url('fonts/icomoon.woff?eizcrq') format('woff'),
    url('fonts/icomoon.svg?eizcrq#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^='icon-'],
[class*=' icon-'] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-nodata-bg1:before {
  content: "\e912";
  color: #d9d9d9;
}
.icon-nodata-bg2:before {
  content: "\e913";
  color: #fdfdfd;
}
.icon-canminus:before {
  content: '\e910';
  color: #e14c46;
}
.icon-noplus:before {
  content: '\e90f';
  color: #e0e0e0;
}
.icon-canplus:before {
  content: '\e911';
  color: #e14c46;
}
.icon-plus:before {
  content: '\e90e';
  color: #e14c46;
}

.icon-pluss:before {
  content: '\e905';
  color: #fff;
}

.icon-minus:before {
  content: '\e90d';
  color: #fff;
}
.icon-schedule-task:before {
  content: '\e908';
  color: #00cdb5;
}
.icon-schedule-schedule:before {
  content: '\e909';
  color: #00cdb5;
}
.icon-schedule-meeting:before {
  content: '\e90b';
  color: #00cdb5;
}
.icon-schedule-important:before {
  content: '\e90c';
}
.icon-delete-empty:before {
  content: '\e90a';
}
.icon-data-race-free:before {
  content: '\e906';
  color: #e4e4e4;
}
.icon-search-empty:before {
  content: '\e907';
  color: #999;
}
.icon-plus-empty:before {
  content: '\e900';
  color: #666;
}
.icon-dragger-empty:before {
  content: '\e901';
  color: #ccc;
}
.icon-arrow-left:before {
  content: '\e903';
}
.icon-triangle:before {
  content: '\e904';
  color: #666;
}
.icon-arrow-right:before {
  content: '\e902';
  color: #ccc;
}
</style>
