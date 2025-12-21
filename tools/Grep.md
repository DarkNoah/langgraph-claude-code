name: Grep

description:

```md
A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use Grep for search tasks. NEVER invoke `grep` or `rg` as a Bash command. The Grep tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
  - Use Task tool for open-ended searches requiring multiple rounds
  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use `interface\\{\\}` to find `interface{}` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like `struct \\{[\\s\\S]*?field`, use `multiline: true`


```

input_schema:

```json
{
  "type": "object",
  "properties": {
    "pattern": {
      "type": "string",
      "description": "The regular expression pattern to search for in file contents"
    },
    "path": {
      "type": "string",
      "description": "File or directory to search in (rg PATH). Defaults to current working directory."
    },
    "glob": {
      "type": "string",
      "description": "Glob pattern to filter files (e.g. "*.js", "*.{ts,tsx}") - maps to rg --glob"
    },
    "output_mode": {
      "type": "string",
      "enum": ["content", "files_with_matches", "count"],
      "description": "Output mode: "content" shows matching lines (supports -A/-B/-C context, -n line numbers, head_limit), "files_with_matches" shows file paths (supports head_limit), "count" shows match counts (supports head_limit). Defaults to \files_with_matches"."
    },
    "-B": {
      "type": "number",
      "description": "Number of lines to show before each match (rg -B). Requires output_mode: "content", ignored otherwise."
    },
    "-A": {
      "type": "number",
      "description": "Number of lines to show after each match (rg -A). Requires output_mode: "content", ignored otherwise."
    },
    "-C": {
      "type": "number",
      "description": "Number of lines to show before and after each match (rg -C). Requires output_mode: "content", ignored otherwise."
    },
    "-n": {
      "type": "boolean",
      "description": "Show line numbers in output (rg -n). Requires output_mode: "content", ignored otherwise."
    },
    "-i": {
      "type": "boolean",
      "description": "Case insensitive search (rg -i)"
    },
    "type": {
      "type": "string",
      "description": "File type to search (rg --type). Common types: js, py, rust, go, java, etc. More efficient than include for standard file types."
    },
    "head_limit": {
      "type": "number",
      "description": "Limit output to first N lines/entries, equivalent to "| head -N". Works across all output modes: content (limits output lines), files_with_matches (limits file paths), count (limits count entries). When unspecified, shows all results from ripgrep."
    },
    "multiline": {
      "type": "boolean",
      "description": "Enable multiline mode where . matches newlines and patterns can span lines (rg -U --multiline-dotall). Default: false."
    }
  },
  "required": ["pattern"],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```



/Volumes/Data/workspace/aime-chat/.erb/scripts/.eslintrc:3:    "no-console": "off",
/Volumes/Data/workspace/aime-chat/.erb/scripts/.eslintrc:4:    "global-require": "off",
/Volumes/Data/workspace/aime-chat/.erb/scripts/.eslintrc:5:    "import/no-dynamic-require": "off",
/Volumes/Data/workspace/aime-chat/.erb/scripts/.eslintrc:6:    "import/no-extraneous-dependencies": "off"
/Volumes/Data/workspace/aime-chat/.erb/configs/.eslintrc:3:    "no-console": "off",
/Volumes/Data/workspace/aime-chat/.erb/configs/.eslintrc:4:    "global-require": "off",
/Volumes/Data/workspace/aime-chat/.erb/configs/.eslintrc:5:    "import/no-dynamic-require": "off"
/Volumes/Data/workspace/aime-chat/.erb/configs/webpack.config.renderer.prod.ts:90:        test: /\\.(woff|woff2|eot|ttf|otf)$/i,
/Volumes/Data/workspace/aime-chat/.erb/configs/webpack.config.eslint.ts:1:/* eslint import/no-unresolved: off, import/no-self-import: off */
/Volumes/Data/workspace/aime-chat/.erb/configs/webpack.config.renderer.dev.ts:113:        test: /\\.(woff|woff2|eot|ttf|otf)$/i,
/Volumes/Data/workspace/aime-chat/.erb/img/erb-banner.svg:28:<stop offset="0.51037" stop-color="#DD5789"/>
/Volumes/Data/workspace/aime-chat/.erb/img/erb-banner.svg:29:<stop offset="1" stop-color="#7A2C9E"/>

[Showing results with pagination = limit: 100, offset: 0]





