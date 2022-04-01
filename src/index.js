import { findByProps } from "@cumcord/modules/webpack";
import { log } from "@cumcord/utils/logger";

export default () => {
  let stream = cumcord.modules.webpack.findByProps("ApplicationStreamFPSButtons");
  let original = stream.ApplicationStreamSettingRequirements;

  return {
    onLoad() {
      log("Cumcake has been loaded!");
      stream.ApplicationStreamSettingRequirements = original.map((obj) => {return  {...obj, userPremiumType: 0, guildPremiumTier: 0}});
    },
    
    onUnload() {
      log("Cumcake has been un-loaded!");
      stream.ApplicationStreamSettingRequirements = original;
    }
  }
}