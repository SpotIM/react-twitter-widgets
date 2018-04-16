import { canUseDOM } from 'exenv'
import onWindowsLoad from './on-window-load'
if (canUseDOM) {
  onWindowLoad(()=>{
  const $script = require('scriptjs') // eslint-disable-line global-require
  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets')  
  })
  
}

export Follow from './components/Follow'
export Hashtag from './components/Hashtag'
export Mention from './components/Mention'
export Share from './components/Share'
export Timeline from './components/Timeline'
export Tweet from './components/Tweet'
