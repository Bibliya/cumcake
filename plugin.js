(function(i,t){"use strict";var a=()=>{let e=cumcord.modules.webpack.findByProps("ApplicationStreamFPSButtons"),n=e.ApplicationStreamSettingRequirements;return{onLoad(){t.log("Cumcake has been loaded!"),e.ApplicationStreamSettingRequirements=n.map(o=>({resolution:o.resolution,fps:o.fps}))},onUnload(){t.log("Cumcake has been un-loaded!"),e.ApplicationStreamSettingRequirements=n}}};return a})(cumcord.modules.webpack,cumcord.utils.logger);