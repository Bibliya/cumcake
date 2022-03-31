import { findByProps } from "@cumcord/modules/webpack";
import { log } from '@cumcord/utils/logger';

const Window = window._;
const Stream = findByProps('ApplicationStreamFPSButtons');

export default () => {
    return {
      onLoad() {
        const requirements = Stream.ApplicationStreamSettingRequirements;
        this.original = Window.cloneDeep(requirements);

        for (let i = 0; i < requirements.length; i++) {
            for (const key in requirements[i]) {
                if (!~['resolution', 'fps'].indexOf(key)) {
                    delete requirements[i][key];
                    log("Cumcake has been loaded!")
                }
            }
        }
      },
      onUnload() {
        log("Cumcake has been un-loaded!")
          Stream.ApplicationStreamSettingRequirements = this.original;
      }
    }
  }
