#!/usr/bin/env node
import { rpsls } from "../lib/rpsls.js";
import minimist from 'minimist';
const args = process.argv.slice(2);
rpsls(args);