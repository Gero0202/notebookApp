import Fuse from "fuse.js";
import { getAllRunbooks } from "./runbook";

const options = {
  keys: ["title", "symptoms", "checklist", "commands", "notes", "tags"],
  threshold: 0.3
};

export function createFuse() {
  return new Fuse(getAllRunbooks(), options);
}
