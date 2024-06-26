import { atom } from "jotai";

/**
 * 簽名 canvas
 */
const signAtom = atom<string | null>(null);

/**
 * 檔案 canvas
 */
const bgFileAtom = atom(null);

export { signAtom, bgFileAtom };
