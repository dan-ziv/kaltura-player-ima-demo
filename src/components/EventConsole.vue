<template>
  <el-row class="padding">
    <el-row>
      <el-col :span="18">
        <div style="margin-bottom: 5px;">
          <el-input placeholder="Filter..." v-model="filter"/>
        </div>
      </el-col>
      <el-col :span="6">
        <el-button type="danger" @click="events=[]">Clear <i class="el-icon-delete"></i></el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="filteredEvents"
        :default-sort="{prop: 'time', order: 'descending'}"
        max-height="300"
        empty-text="No Data"
        class="event-table">
        <el-table-column type="expand">
          <template slot-scope="props">
            <pre v-if="props.row.payload">{{JSON.stringify(props.row.payload || {}, null, 2)}}</pre>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="index"
          label="#"
          width="200">
        </el-table-column>
        <el-table-column
          sortable
          prop="time"
          label="Time"
          width="250">
        </el-table-column>
        <el-table-column
          sortable
          prop="type"
          label="Type">
        </el-table-column>
      </el-table>
    </el-row>
  </el-row>
</template>

<script>
import {adEvents} from '../data/ad-events';

export default {
  props: ['player'],
  computed: {
    filteredEvents() {
      return this.events.filter(event => event.type.indexOf(this.filter.toLowerCase()) > -1);
    }
  },
  mounted() {
    Object.values(adEvents).forEach(event => {
      this.player.addEventListener(event, e => {
        const eventEnum = Object.keys(adEvents).find(k => adEvents[k] === event);
        this.events.push({
          index: this.index++,
          time: new Date().toLocaleTimeString(),
          type: eventEnum,
          payload: e.payload
        });
      });
    });
  },
  data() {
    return {
      index: 1,
      filter: '',
      events: []
    };
  }
};
</script>

<style scoped>
.event-table {
  overflow-x: hidden;
}
</style>
