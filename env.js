const { z } = require("zod");

// defining the schema for the Port
const PortSchema = z.coerce.number().min(1).max(65000).default(3000);

// validating the Port value
const Port = PortSchema.parse(process.env.PORT);

module.exports = Port;
