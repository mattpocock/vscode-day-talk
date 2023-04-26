import { Prettify } from "./07-prettify";

export type Event =
  | {
      type: "click";
      x: number;
      y: number;
    }
  | {
      type: "hover";
      element: HTMLElement;
    }
  | {
      type: "scroll";
      x: number;
      y: number;
    };

// This type is probably doing too much!
// Decompose it into separate aliases

type EventsWithPrefix = {
  [Member in Event as Member["type"]]: Prettify<
    Omit<Member, "type"> & {
      type: `event:${Member["type"]}`;
    }
  >;
}[Event["type"]];
