import { findByProps } from "@cumcord/modules/webpack";
import { log } from "@cumcord/utils/logger";

export default () => {
  let stream = cumcord.modules.webpack.findByProps("ApplicationStreamFPSButtons");
  let original = stream.ApplicationStreamSettingRequirements;

  return {
    onLoad() {
      log("Cumcake has been loaded!");
      stream.ApplicationStreamSettingRequirements = original.map(obj => {return {resolution: obj.resolution, fps: obj.fps}});
    },
    
    onUnload() {
      log("Cumcake has been un-loaded!");
      stream.ApplicationStreamSettingRequirements = original;
    }
  }
}