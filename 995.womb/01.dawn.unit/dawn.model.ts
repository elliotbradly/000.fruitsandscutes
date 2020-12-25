import FileBit from "995.womb/fce/file.bit";
import Dawn from "./fce/Dawn.interface";
import DawnBit from "./fce/dawn.interface";

export class DawnModel implements Dawn {
  //idx:string;
  //dawnBitList: DawnBit[] = [];
  //dawnBits: any = {};
  arteSrc: string = "./data/arte/";
  arteList: string[] = [];
  fileName: string = "";
  fileEnd: string = "";
  fileDex: number = 0;
  file: FileBit;
}
