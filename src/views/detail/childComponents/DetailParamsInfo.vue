<template>
  <div class="params-info" v-if="Object.keys(info).length !== 0">
    <!-- {{ info }} -->
    <table
      v-for="(table, index) in info.rule.tables"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>

    <table class="info-params">
      <tr v-for="(info, index) in info.info.set" :key="index">
        <td class="info-params-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scroped>
.params-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.params-info table {
  width: 100%;
  border-collapse: collapse;
}

.params-info table tr {
  height: 42px;
}

.params-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-params-key {
  width: 95px;
}

.info-params {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.params-value {
  color: #eb4868;
}
</style>
