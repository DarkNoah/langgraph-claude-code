name: KillBash

description:

```md
- Kills a running background bash shell by its ID
- Takes a shell_id parameter identifying the shell to kill
- Returns a success or failure status 
- Use this tool when you need to terminate a long-running shell
- Shell IDs can be found using the /bashes command

```

## Input Schema:

```json
{
  "type": "object",
  "properties": {
    "shell_id": {
      "type": "string",
      "description": "The ID of the background shell to kill"
    }
  },
  "required": ["shell_id"],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

## Input Zod

```js
z.object({
  shell_id: z.string().describe("The ID of the background shell to kill"),
});
```



```md

{"message":"Successfully killed shell: afe9bb (node \\"/Volumes/Data/workspace/langgraph-claude-code/scripts/time-display.js\\")","shell_id":"afe9bb"}

<system-reminder>
Background Bash afe9bb (command: node "/Volumes/Data/workspace/langgraph-claude-code/scripts/time-display.js") (status: running) Has new output available. You can check its output using the BashOutput tool.
</system-reminder>
```
                    "content": "{\"message\":\"Successfully killed shell: dd2412 (cd /Volumes/Data/test && npm run dev)\",\"shell_id\":\"dd2412\"}\n\n<system-reminder>\nBackground Bash dd2412 (command: cd /Volumes/Data/test && npm run dev) (status: running) Has new output available. You can check its output using the BashOutput tool.\n</system-reminder>",
