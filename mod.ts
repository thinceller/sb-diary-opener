import { format } from "https://deno.land/std@0.85.0/datetime/mod.ts";

export async function open(projectName: string, title: string) {
  const date = format(new Date(), "yyyy/M/d");
  const url = `https://scrapbox.io/${projectName}/${date} ${title}`;

  const programAliases = {
    windows: "explorer",
    darwin: "open",
    linux: "sensible-browser",
  };
  const process = Deno.run({ cmd: [programAliases[Deno.build.os], encodeURIComponent(url)] });
  await process.status();
}
