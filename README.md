# sb_diary_opener
This module allows you to open a new Scrapbox page with a date in the default browser.

## Usage
You need to run a script with `--allow-run` permission.
```typescript
import { open } from "https://deno.land/x/sb_diary_opener@0.2.1/mod.ts";

open("your-scrapbox-project-name", "page title");
```
