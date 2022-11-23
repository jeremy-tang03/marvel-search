import { config } from "dotenv";

require("dotenv").config();

const dbURL = config.env.ATLAS_URI;
const { MongoCLient } = require("mongodb");

