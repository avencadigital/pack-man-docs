// @ts-nocheck
import * as __fd_glob_23 from "../content/docs/guides/updating-packages.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/guides/understanding-results.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/guides/troubleshooting.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/guides/github-integration.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/guides/analyzing-dependencies.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/getting-started/supported-formats.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/getting-started/quick-start.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/getting-started/introduction.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/getting-started/github-token.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/extensions/vscode.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/extensions/overview.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/extensions/chrome.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/architecture/overview.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/api/index.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/api/health.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/api/analyze-packages.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/changelog.mdx?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/guides/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/getting-started/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/extensions/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/architecture/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/api/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "api/meta.json": __fd_glob_1, "architecture/meta.json": __fd_glob_2, "extensions/meta.json": __fd_glob_3, "getting-started/meta.json": __fd_glob_4, "guides/meta.json": __fd_glob_5, }, {"changelog.mdx": __fd_glob_6, "index.mdx": __fd_glob_7, "api/analyze-packages.mdx": __fd_glob_8, "api/health.mdx": __fd_glob_9, "api/index.mdx": __fd_glob_10, "architecture/overview.mdx": __fd_glob_11, "extensions/chrome.mdx": __fd_glob_12, "extensions/overview.mdx": __fd_glob_13, "extensions/vscode.mdx": __fd_glob_14, "getting-started/github-token.mdx": __fd_glob_15, "getting-started/introduction.mdx": __fd_glob_16, "getting-started/quick-start.mdx": __fd_glob_17, "getting-started/supported-formats.mdx": __fd_glob_18, "guides/analyzing-dependencies.mdx": __fd_glob_19, "guides/github-integration.mdx": __fd_glob_20, "guides/troubleshooting.mdx": __fd_glob_21, "guides/understanding-results.mdx": __fd_glob_22, "guides/updating-packages.mdx": __fd_glob_23, });