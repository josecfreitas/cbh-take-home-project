const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  // fail fast
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  // handle objects missing partitionKey field
  if (!event.partitionKey) {
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }

  // handle objects containing partitionKey field
  // use constant over let to make it clear that this value is not going to change
  const candidate = typeof event.partitionKey === "string"
    ? event.partitionKey
    : JSON.stringify(event.partitionKey);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};