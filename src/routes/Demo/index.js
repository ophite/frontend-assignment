import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'demo',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      const Demo = require('./containers/DemoContainer').default
      /*  Return getComponent   */
      cb(null, Demo)

    /* Webpack named bundle   */
    }, 'demo')
  }
})
