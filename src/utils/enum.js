class Enum {
  constructor(map) {
    if (Array.isArray(map)) {
      map.forEach((value) => {
        Object.defineProperty(this, value, {
          enumerable: true,
          value
        });
      });
    } else {
      Object.keys(map).forEach((key) => {
        Object.defineProperty(this, key, {
          enumerable: true,
          value: map[key]
        });
      });
    }

    Object.freeze(this);
  }
}

export default Enum;
