import type { Coin } from "../types.js";
import { base58DecodeNoCheck, base58EncodeNoCheck } from "../utils/base58.js";

const name = "srm";
const coinType = 573;

export const encodeSrmAddress = base58EncodeNoCheck;
export const decodeSrmAddress = base58DecodeNoCheck;

export const srm = {
  name,
  coinType,
  encode: encodeSrmAddress,
  decode: decodeSrmAddress,
} as const satisfies Coin;
