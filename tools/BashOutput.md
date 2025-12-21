## Name: BashOutput

## Description:

```md
- Retrieves output from a running or completed background bash shell
- Takes a shell_id parameter identifying the shell
- Always returns only new output since the last check
- Returns stdout and stderr output along with shell status
- Supports optional regex filtering to show only lines matching a pattern
- Use this tool when you need to monitor or check the output of a long-running shell
- Shell IDs can be found using the /bashes command
```

## Input Schema

```json
{
  "type": "object",
  "properties": {
    "bash_id": {
      "type": "string",
      "description": "The ID of the background shell to retrieve output from"
    },
    "filter": {
      "type": "string",
      "description": "Optional regular expression to filter the output lines. Only lines matching this regex will be included in the result. Any lines that do not match will no longer be available to read."
    }
  },
  "required": ["bash_id"],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

## Input Zod

```js
z.object({
  bash_id: z
    .string()
    .describe("The ID of the background shell to retrieve output from"),
  filter: z
    .string()
    .optional()
    .describe(
      "Optional regular expression to filter the output lines. Only lines matching this regex will be included in the result. Any lines that do not match will no longer be available to read."
    ),
});
```



## 返回
```md
<status>running</status>

<stdout>
开始持续输出当前时间...
按 Ctrl+C 停止输出
----------------------------
当前时间: 2025/11/22 09:35:03
当前时间: 2025/11/22 09:35:04
当前时间: 2025/11/22 09:35:05
当前时间: 2025/11/22 09:35:06
当前时间: 2025/11/22 09:35:07
当前时间: 2025/11/22 09:35:08
当前时间: 2025/11/22 09:35:09
当前时间: 2025/11/22 09:35:10
当前时间: 2025/11/22 09:35:11
当前时间: 2025/11/22 09:35:12
当前时间: 2025/11/22 09:35:13
当前时间: 2025/11/22 09:35:14
当前时间: 2025/11/22 09:35:15
当前时间: 2025/11/22 09:35:16
当前时间: 2025/11/22 09:35:17
当前时间: 2025/11/22 09:35:18
当前时间: 2025/11/22 09:35:19
当前时间: 2025/11/22 09:35:20
当前时间: 2025/11/22 09:35:21
当前时间: 2025/11/22 09:35:22
当前时间: 2025/11/22 09:35:23
当前时间: 2025/11/22 09:35:24
当前时间: 2025/11/22 09:35:25
当前时间: 2025/11/22 09:35:26
当前时间: 2025/11/22 09:35:27
当前时间: 2025/11/22 09:35:28
当前时间: 2025/11/22 09:35:29
当前时间: 2025/11/22 09:35:30
当前时间: 2025/11/22 09:35:31
当前时间: 2025/11/22 09:35:32
当前时间: 2025/11/22 09:35:33
当前时间: 2025/11/22 09:35:34
当前时间: 2025/11/22 09:35:35
当前时间: 2025/11/22 09:35:36
当前时间: 2025/11/22 09:35:37
</stdout>

<timestamp>2025-11-22T01:35:37.980Z</timestamp>

<system-reminder>
Background Bash afe9bb (command: node "/Volumes/Data/workspace/langgraph-claude-code/scripts/time-display.js") (status: running) Has new output available. You can check its output using the BashOutput tool.
</system-reminder>
```