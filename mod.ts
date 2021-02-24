import { format } from "https://deno.land/std@0.85.0/datetime/mod.ts";

export async function open(projectName: string, title: string) {
  const date = format(new Date(), "yyyy/M/d");
  const encodedPath = encodeURIComponent(`${projectName}/${date} ${title}`)
  const url = `https://scrapbox.io/${encodedPath}`;

  const programAliases = {
    windows: "explorer",
    darwin: "open",
    linux: "sensible-browser",
  };
  const process = Deno.run({ cmd: [programAliases[Deno.build.os], url] });
  await process.status();
}
