const crypto = require("crypto");

const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  describe('partitionKey field exists', () => {
    it("should return partitionKey field as it is if it exists and its lenght is lower than or equal to 256", () => {
      const partitionKey = createString(256);
      const trivialKey = deterministicPartitionKey({ partitionKey });
      expect(trivialKey).toBe(partitionKey);
    });

    it("should return partitionKey field sha3-512 hexadecimal hash if it exists and its lenght is greater than 256", () => {
      const partitionKey = createString(257);
      const trivialKey = deterministicPartitionKey({ partitionKey });

      expect(trivialKey).toBe(hashAndHexValue(partitionKey));
    });

    it("should convert partitionKey field to string if it is an object", () => {
      const partitionKey = { a: 1, b: 2, c: 3 };
      const trivialKey = deterministicPartitionKey({ partitionKey });

      expect(trivialKey).toBe(JSON.stringify(partitionKey));
    });
  });

  describe('partitionKey field does not exist', () => {
    it("should return the event object stringfied and hashed", () => {
      const anotherKey = createString(200);
      const trivialKey = deterministicPartitionKey({ anotherKey });
      expect(trivialKey).toBe(hashAndHexValue(JSON.stringify({ anotherKey })));
    });

    it("should return the event object stringfied and hashed for large objects", () => {
      const anotherKey = createString(10000);
      const trivialKey = deterministicPartitionKey({ anotherKey });
      expect(trivialKey).toBe(hashAndHexValue(JSON.stringify({ anotherKey })));
    });
  });
});

const createString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const hashAndHexValue = (value) => crypto.createHash("sha3-512").update(value).digest("hex")
