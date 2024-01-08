var FP = {
    "0": 52,
    "1": 53,
    "2": 54,
    "3": 55,
    "4": 56,
    "5": 57,
    "6": 58,
    "7": 59,
    "8": 60,
    "9": 61,
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "E": 4,
    "F": 5,
    "G": 6,
    "H": 7,
    "I": 8,
    "J": 9,
    "K": 10,
    "L": 11,
    "M": 12,
    "N": 13,
    "O": 14,
    "P": 15,
    "Q": 16,
    "R": 17,
    "S": 18,
    "T": 19,
    "U": 20,
    "V": 21,
    "W": 22,
    "X": 23,
    "Y": 24,
    "Z": 25,
    "a": 26,
    "b": 27,
    "c": 28,
    "d": 29,
    "e": 30,
    "f": 31,
    "g": 32,
    "h": 33,
    "i": 34,
    "j": 35,
    "k": 36,
    "l": 37,
    "m": 38,
    "n": 39,
    "o": 40,
    "p": 41,
    "q": 42,
    "r": 43,
    "s": 44,
    "t": 45,
    "u": 46,
    "v": 47,
    "w": 48,
    "x": 49,
    "y": 50,
    "z": 51,
    "+": 62,
    "/": 63,
    "=": 64,
    "-": 62,
    "_": 63,
    ".": 64
};
function Qj(consumer, Q, n, J) {
    var G = n;
    function l(r) {
        var U, E;
        for (; G < J.length;) {
            U = J.charAt(G++);
            E = FP[U];
            if (null != E) {
                return E;
            }
            if (!/^[\s\xa0]*$/.test(U)) {
                throw Error('Unknown base64 encoding at char: ' + U);
            }
        }
        return r;
    }
    for (;;) {
        var T = l(Q);
        var M = l(n);
        var x = l(64);
        var z = l(64);
        if (64 === z && -1 === T) {
            break;
        }
        consumer(T << 2 | M >> 4);
        if (x != 64) {
            consumer(M << 4 & 240 | x >> 2);
            if (z != 64) {
                consumer(x << 6 & 192 | z);
            }
        }
    }
}
