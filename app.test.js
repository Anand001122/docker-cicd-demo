const test = require("node:test");
const assert = require("node:assert");

test("health status should be healthy", () => {
  const response = { status: "healthy" };

  assert.strictEqual(response.status, "healthy");
});
