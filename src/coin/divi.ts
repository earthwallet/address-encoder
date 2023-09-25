import type { Coin } from "../types.js";
import {
  createBase58WithCheckDecoder,
  createBase58WithCheckEncoder,
} from "../utils/base58.js";

const name = "divi";
const coinType = 301;

const p2pkhVersions = [new Uint8Array([0x1e])];
const p2shVersions = [new Uint8Array([0xd])];

export const encodeDiviAddress = createBase58WithCheckEncoder(
  p2pkhVersions[0],
  p2shVersions[0]
);
export const decodeDiviAddress = createBase58WithCheckDecoder(
  p2pkhVersions,
  p2shVersions
);

export const divi = {
  name,
  coinType,
  encode: encodeDiviAddress,
  decode: decodeDiviAddress,
} as const satisfies Coin;
