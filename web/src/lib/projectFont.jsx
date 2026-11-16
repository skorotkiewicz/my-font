import { allCodepoints } from "../data/characters.jsx";
var sha256Constants = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var rotateRight = (argument, argument2) => argument >>> argument2 | argument << 32 - argument2;
function sha256(argument) {
  let value = argument.length * 8;
  let value2 = new Uint8Array(argument.length + 9 + 63 >> 6 << 6);
  value2.set(argument);
  value2[argument.length] = 128;
  let value3 = new DataView(value2.buffer);
  value3.setUint32(value2.length - 8, Math.floor(value / 4294967296));
  value3.setUint32(value2.length - 4, value >>> 0);
  let value4 = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
  let value5 = new Uint32Array(64);
  for (let value8 = 0; value8 < value2.length; value8 += 64) {
    for (let value17 = 0; value17 < 16; value17++) {
      value5[value17] = value3.getUint32(value8 + value17 * 4);
    }
    for (let value17 = 16; value17 < 64; value17++) {
      let value18 = rotateRight(value5[value17 - 15], 7) ^ rotateRight(value5[value17 - 15], 18) ^ value5[value17 - 15] >>> 3;
      let value19 = rotateRight(value5[value17 - 2], 17) ^ rotateRight(value5[value17 - 2], 19) ^ value5[value17 - 2] >>> 10;
      value5[value17] = value5[value17 - 16] + value18 + value5[value17 - 7] + value19;
    }
    let [value9, value10, value11, value12, value13, value14, value15, value16] = value4;
    for (let value17 = 0; value17 < 64; value17++) {
      let value18 = value16 + (rotateRight(value13, 6) ^ rotateRight(value13, 11) ^ rotateRight(value13, 25)) + (value13 & value14 ^ ~value13 & value15) + sha256Constants[value17] + value5[value17];
      let value19 = (rotateRight(value9, 2) ^ rotateRight(value9, 13) ^ rotateRight(value9, 22)) + (value9 & value10 ^ value9 & value11 ^ value10 & value11);
      value16 = value15;
      value15 = value14;
      value14 = value13;
      value13 = value12 + value18 >>> 0;
      value12 = value11;
      value11 = value10;
      value10 = value9;
      value9 = value18 + value19 >>> 0;
    }
    value4[0] += value9;
    value4[1] += value10;
    value4[2] += value11;
    value4[3] += value12;
    value4[4] += value13;
    value4[5] += value14;
    value4[6] += value15;
    value4[7] += value16;
  }
  let value6 = new Uint8Array(32);
  let value7 = new DataView(value6.buffer);
  value4.forEach((argument2, argument3) => value7.setUint32(argument3 * 4, argument2));
  return value6;
}
var projectTableTag = `DUCT`;
var projectMagic = `DCTS`;
var projectFormatVersion = 1;
var projectHeaderSize = 44;
var maxInflatedBytes = 50331648;
var maxProjectPoints = 2000000;
var legacyFontPrefix = `Handwriting font `;
var readTag = (argument, argument2) => String.fromCharCode(argument[argument2], argument[argument2 + 1], argument[argument2 + 2], argument[argument2 + 3]);
function readFontTables(argument) {
  let value = new DataView(argument.buffer, argument.byteOffset, argument.byteLength);
  let value2 = value.getUint16(4);
  if (!value2 || 12 + value2 * 16 > argument.length) {
    return;
  }
  let value3 = new Map();
  for (let value4 = 0; value4 < value2; value4++) {
    let value5 = 12 + value4 * 16;
    let value6 = value.getUint32(value5 + 8);
    let value7 = value.getUint32(value5 + 12);
    if (value6 + value7 <= argument.length) {
      value3.set(readTag(argument, value5), {
        offset: value6,
        length: value7
      });
    }
  }
  return value3;
}
function fontDescription(argument, argument2) {
  if (!argument2 || argument2.length < 6) {
    return;
  }
  let value = new DataView(argument.buffer, argument.byteOffset + argument2.offset, argument2.length);
  let value2 = value.getUint16(2);
  let value3 = value.getUint16(4);
  if (!(6 + value2 * 12 > argument2.length)) {
    for (let value4 = 0; value4 < value2; value4++) {
      let value5 = 6 + value4 * 12;
      let [value6,,, value7, value8, value9] = [0, 2, 4, 6, 8, 10].map(argument3 => value.getUint16(value5 + argument3));
      let value10 = value3 + value9;
      if (value7 !== 8 || value10 + value8 > argument2.length || value8 > 256) {
        continue;
      }
      let value11 = new Uint8Array(argument.buffer, argument.byteOffset + argument2.offset + value10, value8);
      if (value6 === 3) {
        return String.fromCharCode(...Array.from({
          length: value8 >> 1
        }, (argument3, argument4) => value11[argument4 * 2] << 8 | value11[argument4 * 2 + 1]));
      }
      if (value6 === 1) {
        return String.fromCharCode(...value11);
      }
    }
  }
}
async function inflateProject(argument, argument2) {
  let value = new Blob([argument]).stream().pipeThrough(new DecompressionStream(`deflate-raw`)).getReader();
  let value2 = [];
  let value3 = 0;
  while (true) {
    let {
      done: value6,
      value: value7
    } = await value.read();
    if (value6) {
      break;
    }
    value3 += value7.length;
    if (value3 > argument2) {
      await value.cancel();
      throw Error(`Too large`);
    }
    value2.push(value7);
  }
  let value4 = new Uint8Array(value3);
  let value5 = 0;
  for (let value6 of value2) {
    value4.set(value6, value5);
    value5 += value6.length;
  }
  return value4;
}
var equalBytes = (argument, argument2) => argument.length === argument2.length && argument.every((argument3, argument4) => argument3 === argument2[argument4]);
async function readProjectFont(argument) {
  let value = argument2 => ({
    ok: false,
    reason: argument2
  });
  let value2 = new Uint8Array(argument);
  if (value2.length < 12 || value2.length > 16777216) {
    return value(`not-font`);
  }
  let value3 = readTag(value2, 0);
  if (value3 === `wOFF` || value3 === `wOF2`) {
    return value(`website`);
  }
  if (value3 === `ttcf`) {
    return value(`not-ductus`);
  }
  if (value3 !== `OTTO` && value3 !== `true` && value3 !== `\0\0\0`) {
    return value(`not-font`);
  }
  let value4 = readFontTables(value2);
  if (!value4) {
    return value(`not-font`);
  }
  let value5 = value4.get(projectTableTag);
  if (!value5) {
    return value(fontDescription(value2, value4.get(`name`))?.startsWith(legacyFontPrefix) ? `legacy` : `not-ductus`);
  }
  try {
    if (value5.length < projectHeaderSize || readTag(value2, value5.offset) !== projectMagic) {
      return value(`damaged`);
    }
    let value6 = new DataView(value2.buffer, value5.offset, value5.length);
    if (value6.getUint16(4) > projectFormatVersion) {
      return value(`newer`);
    }
    let value7 = value6.getUint32(8);
    if (value7 !== value5.length - projectHeaderSize) {
      return value(`damaged`);
    }
    let value8 = value2.slice(value5.offset + projectHeaderSize, value5.offset + projectHeaderSize + value7);
    if (!equalBytes(sha256(value8), value2.subarray(value5.offset + 12, value5.offset + projectHeaderSize))) {
      return value(`damaged`);
    }
    let value9 = new TextDecoder(`utf-8`, {
      fatal: true
    }).decode(await inflateProject(value8, maxInflatedBytes));
    let value10 = JSON.parse(value9);
    if (!isRecord(value10) || !isFiniteNumber(value10.exportedAt)) {
      return value(`damaged`);
    } else if (isRecord(value10.project) && isFiniteNumber(value10.project.schemaVersion) && value10.project.schemaVersion > 1) {
      return value(`newer`);
    } else {
      return {
        ok: true,
        project: validateProject(value10.project),
        exportedAt: value10.exportedAt
      };
    }
  } catch {
    return value(`damaged`);
  }
}
var InvalidProjectError = class extends Error {};
var isRecord = argument => typeof argument == `object` && !!argument && !Array.isArray(argument);
var isFiniteNumber = argument => typeof argument == `number` && Number.isFinite(argument);
function assertProject(argument) {
  if (!argument) {
    throw new InvalidProjectError();
  }
}
function boundedNumber(argument, argument2, argument3) {
  assertProject(isFiniteNumber(argument) && argument >= argument2 && argument <= argument3);
  return argument;
}
function boundedString(argument, argument2) {
  assertProject(typeof argument == `string` && argument.length <= argument2);
  return argument;
}
function boundedArray(argument, argument2, argument3 = 0) {
  assertProject(Array.isArray(argument) && argument.length >= argument3 && argument.length <= argument2);
  return argument;
}
var supportedCodepoints = new Set(allCodepoints);
var supportedInputs = [`pen`, `touch`, `mouse`];
var maxStrokes = 100000;
function validateProject(project) {
  assertProject(isRecord(project) && project.schemaVersion === 1);
  let value = project.settings;
  assertProject(isRecord(value));
  assertProject(isRecord(project.glyphs));
  let value2 = Object.entries(project.glyphs);
  assertProject(value2.length <= supportedCodepoints.size);
  let value3 = 0;
  let value4 = {};
  for (let [value5, glyph] of value2) {
    let value6 = Number(value5);
    assertProject(supportedCodepoints.has(value6) && isRecord(glyph) && glyph.cp === value6);
    value4[value6] = {
      cp: value6,
      drawings: boundedArray(glyph.drawings, 8).map(drawing => {
        assertProject(isRecord(drawing) && isRecord(drawing.fix));
        let value7 = boundedArray(drawing.strokes, 500).map(stroke => {
          assertProject(isRecord(stroke) && supportedInputs.includes(stroke.input));
          let value8 = boundedArray(stroke.pts, 20000, 1).map(argument => {
            assertProject(Array.isArray(argument) && argument.length === 3);
            return [boundedNumber(argument[0], -100000, maxStrokes), boundedNumber(argument[1], -100000, maxStrokes), boundedNumber(argument[2], 0, 1)];
          });
          value3 += value8.length;
          assertProject(value3 <= maxProjectPoints);
          return {
            id: boundedString(stroke.id, 64),
            pts: value8,
            input: stroke.input
          };
        });
        return {
          id: boundedString(drawing.id, 64),
          strokes: value7,
          fix: {
            dx: boundedNumber(drawing.fix.dx, -100000, maxStrokes),
            dy: boundedNumber(drawing.fix.dy, -100000, maxStrokes),
            scale: boundedNumber(drawing.fix.scale, 0.1, 10)
          },
          updatedAt: boundedNumber(drawing.updatedAt, 0, 9007199254740991)
        };
      })
    };
  }
  return {
    schemaVersion: 1,
    id: boundedString(project.id, 64),
    name: boundedString(project.name, 100),
    createdAt: boundedNumber(project.createdAt, 0, 9007199254740991),
    updatedAt: boundedNumber(project.updatedAt, 0, 9007199254740991),
    glyphs: value4,
    settings: {
      tracking: boundedNumber(value.tracking, -1000, 1000),
      tidy: typeof value.tidy != `boolean` || value.tidy
    }
  };
}
export { readProjectFont, sha256, readFontTables };
