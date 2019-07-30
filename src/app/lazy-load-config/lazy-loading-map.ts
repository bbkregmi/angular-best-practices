
import { InjectionToken } from '@angular/core';

export type LAZY_MODULES = {
  datacenterOnPush: string;
};

export const lazyMap: LAZY_MODULES = {
  datacenterOnPush: 'src/app/change-detection/on-push-strategy/with-on-push/with-on-push.module#WithOnPushModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});
