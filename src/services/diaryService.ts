import diaries from "../../data/diaries";

import { DiaryEntry, OmitSensitiveDiaryEntry } from "../types";

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): OmitSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addEntry = (body:Record<string, unknown>) => {
  return body;
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries,
};
