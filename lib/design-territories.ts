export type DesignTerritoryKey = "long-view" | "two-clocks" | "confluence";

export type DesignTerritory = {
  key: DesignTerritoryKey;
  name: string;
  className: string;
  category: "restrained" | "expressive" | "experimental";
  governingIdea: string;
  thesis: string;
  art: string;
  artAlt: string;
  signal: string;
};

export const designTerritories: Record<DesignTerritoryKey, DesignTerritory> = {
  "long-view": {
    key: "long-view",
    name: "Long View",
    className: "territory--long-view",
    category: "restrained",
    governingIdea: "The long view.",
    thesis: "Calm judgment, real work, and relationships designed to outlast the tool cycle.",
    art: "/art/macs-long-view-horizon.svg",
    artAlt: "MACS Long View horizon study",
    signal: "Built to last. Current enough to matter.",
  },
  "two-clocks": {
    key: "two-clocks",
    name: "Two Clocks",
    className: "territory--two-clocks",
    category: "expressive",
    governingIdea: "One watches what has to last. One stays close to what is changing.",
    thesis: "The father-and-son difference becomes the composition system instead of a founder-card footnote.",
    art: "/art/macs-two-clocks.svg",
    artAlt: "MACS Two Clocks study",
    signal: "Long view / next move",
  },
  confluence: {
    key: "confluence",
    name: "Confluence",
    className: "territory--confluence",
    category: "experimental",
    governingIdea: "Two currents. One accountable team.",
    thesis: "Two generations and two operating strengths merge into one clear path for the client.",
    art: "/art/macs-confluence.svg",
    artAlt: "MACS Confluence study",
    signal: "Two currents / one path",
  },
};

export const territoryOrder: DesignTerritoryKey[] = ["long-view", "two-clocks", "confluence"];
