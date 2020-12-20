import { Action } from "../00.core/interface/action.interface";
import SurfaceBit from "./fce/surface.bit.interface";
import SurfaceResizeBit from "./fce/surface-resize.bit.interface";

export const PULL_RESIZE_ALL = "[Surface Action] Pull Resize All";
export class PullResizeAll implements Action {
  readonly type = PULL_RESIZE_ALL;
  constructor(public bale: SurfaceResizeBit) {}
}

export const RESIZE_SURFACE = "[Surface Action] Resize Surface";
export class ResizeSurface implements Action {
  readonly type = RESIZE_SURFACE;
  constructor(public bale: SurfaceResizeBit) {}
}

export const SURFACE_CREATE = "[Surface Action] Create Surface";
export class CreateSurface implements Action {
  readonly type = SURFACE_CREATE;
  constructor(public bale: SurfaceBit) {}
}

export type Actions =
  | ResizeSurface
  | PullResizeAll
  | ResizeSurface
  | CreateSurface;
