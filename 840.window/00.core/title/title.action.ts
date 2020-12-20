import { Action } from "../interface/action.interface";
import Link from "../interface/link.interface";
import PivotBit from "../interface/pivot-bit.interface";
import Pivot from "../interface/pivot.interface";

export const UPDATE_PATH = "[play action] Update Path";
export class UpdatePath implements Action {
  readonly type = UPDATE_PATH;
  constructor(public bale: Link) {}
}

export const PULL_PIVOT = "[play action] Pull Pivot";
export class PullPivot implements Action {
  readonly type = PULL_PIVOT;
  constructor(public bale: PivotBit) {}
}

export const PUSH_PIVOT = "[play action] Push Pivot";
export class PushPivot implements Action {
  readonly type = PUSH_PIVOT;
  constructor(public bale: Pivot) {}
}

export type Actions = UpdatePath | PullPivot | PushPivot;
