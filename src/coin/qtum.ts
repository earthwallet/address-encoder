import type { Coin } from "../types.js";
import { base58Decode, base58Encode } from "../utils/base58.js";

const name = "qtum";
const coinType = 2301;

export const encodeQtumAddress = base58Encode;
export const decodeQtumAddress = base58Decode;

export const qtum = {
  name,
  coinType,
  encode: encodeQtumAddress,
  decode: decodeQtumAddress,
} as const satisfies Coin;
