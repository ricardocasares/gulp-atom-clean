module.exports = {
  name: 'ac:clean',
  help: 'Deletes files and folders',
  task: (gulp, cfg) => cb => {
    const del = require('del')
    return del(cfg.target, cb)
  },
  config: {
    target: 'build/'
  }
}
