import { Action } from "../00.core/interface/action.interface";
import DuneBit from "./fce/dune.bit";

// Dune actions
//Treachous host

export const INIT_DUNE = "[Dune action] Init Dune";
export class InitDune implements Action {
  readonly type = INIT_DUNE;
  constructor(public bale: DuneBit) {}
}

export const UPDATE_DUNE = "[Dune action] Update Dune";
export class UpdateDune implements Action {
  readonly type = UPDATE_DUNE;
  constructor(public bale: DuneBit) {}
}

export type Actions = InitDune | UpdateDune;
