import Title from "./fce/Title.interface";
import Link from "../interface/link.interface";
import Pivot from "../interface/pivot.interface";

export class TitleModel implements Title {
  path: Link = null;
  pivot: Pivot;
  extracted: any;
}
