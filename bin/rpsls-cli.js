#!/usr/bin/env node#!
import minimist from 'minimist';
import { rps } from "../lib/rps.js";
const args = process.argv.slice(2);
rpsls(args);