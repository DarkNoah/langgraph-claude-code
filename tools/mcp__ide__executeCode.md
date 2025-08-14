name: mcp\_\_ide\_\_executeCode

description:

```md
Execute python code in the Jupyter kernel for the current notebook file.

All code will be executed in the current Jupyter kernel.

Avoid declaring variables or modifying the state of the kernel unless the user
explicitly asks for it.

Any code executed will persist across calls to this tool, unless the kernel
has been restarted.
```

input_schema:

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "description": "The code to be executed on the kernel."
    }
  },
  "required": ["code"],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```
