name: mcp\_\_ide\_\_getDiagnostics

description:

```md
Get language diagnostics from VS Code
```

input_schema:

```json
{
  "type": "object",
  "properties": {
    "uri": {
      "type": "string",
      "description": "Optional file URI to get diagnostics for. If not provided, gets diagnostics for all files."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```
