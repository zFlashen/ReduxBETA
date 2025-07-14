export function writeAscii(a, b, c) {
  for (let d = 0; d < c.length; d++) b.setUint8(a++, c.charCodeAt(d));
  b.setUint8(a, 0);
}
export function writeUtf16(a, b, c) {
  for (let d = 0; d < c.length; d++)
    b.setUint16(a, c.charCodeAt(d), !0), (a += 2);
  b.setUint16(a, 0, !0);
}
export function readAscii(a) {
  let b = "";
  for (;;) {
    const c = a.getUint8(a.offset++);
    if (0 === c) break;
    b += String.fromCharCode(c);
  }
  return b;
}
export function readUtf16(a) {
  let b = "";
  for (;;) {
    const c = a.getUint16(a.offset, !0);
    if (((a.offset += 2), 0 === c)) break;
    b += String.fromCharCode(c);
  }
  return b;
}
