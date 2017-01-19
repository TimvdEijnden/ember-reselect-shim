module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'reselect', target: '2.5.4'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
