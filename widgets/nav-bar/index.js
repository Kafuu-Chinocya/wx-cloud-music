Component({
  options: {
    styleIsolation: "apply-shared"
  },
  behaviors: [],
  properties: {
    navMenuList: {
      type: Array,
      value: () => []
    }
  },
  data: {},
  lifetimes: {
    created() {},
    attached() {},
    moved() {},
    detached() {}
  },
  methods: {}
})
