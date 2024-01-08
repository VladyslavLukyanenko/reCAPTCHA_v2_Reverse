const U = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-",
  "_",
  "."
];

function encodeBytes(_, Q: number, bytes: number[], J: number, M, O, x, G, z, T, t, l, r, U, E, N, a, v, X) {
  t = [];
  if (!J) {
    J = 0;
  }

  a = 0;
  for (; a < bytes.length; a += 3) {
    E = a + 2 < bytes.length;
    if (l = a + 1 < bytes.length) {
      N = bytes[a + 1];
    } else {
      N = 0;
    }
    M = bytes[a];
    if (E) {
      G = bytes[a + 2];
    } else {
      G = 0;
    }
    T = M >> 2;
    x = (N & 15) << 2 | G >> Q;
    z = (M & 3) << 4 | N >> 4;
    O = G & 63;
    if (!E) {
      O = 64;
      if (!l) {
        x = 64;
      }
    }
    t.push(U[T], U[z], U[x] || '', U[O] || '');
  }
  v = t.join('');
  return v;
}