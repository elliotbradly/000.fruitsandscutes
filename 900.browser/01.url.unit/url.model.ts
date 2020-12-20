import Url from "./fce/Url.interface";
import UrlBit from "./fce/url.interface";

export class UrlModel implements Url {
  proto: string;
  host: string;
  hostFull: string;
  pathname: string;
  search: string;
  path: string[];
  title: string;
  data: any;
}
