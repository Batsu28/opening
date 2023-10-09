import { Vector3 } from "three";

const BoxSetting = () => {
  let PositionArr = [];
  for (let x = 0; x < 12; x++) {
    for (let y = 0; y < 36; y++) {
      PositionArr.push(new Vector3(x + 0.1 * x, y + 0.1 * y, y * -0.2));
    }
  }
  return PositionArr;
};

export { BoxSetting };
