#!/usr/bin/env node
import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js";
const args = process.argv.slice(2);
rpsls(args);