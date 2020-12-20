import Layout from "./fce/Layout.interface";
import LayoutBit from "./fce/layout.bit";

export class LayoutModel implements Layout {
  ready: boolean;

  layout: any;
  root: any;

  //we may take this out
  groupList: LayoutBit[] = [];
  groups: any = {};

  //we make take this out
  compList: LayoutBit[] = [];
  comps: any = {};

  contentNow: LayoutBit;
  contentList: LayoutBit[] = [];
  contents: any = {};
}
