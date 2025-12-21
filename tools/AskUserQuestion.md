### Name: AskUserQuestion

## Description

```md
Use this tool when you need to ask the user questions during execution. This allows you to:

1. Gather user preferences or requirements
2. Clarify ambiguous instructions
3. Get decisions on implementation choices as you work
4. Offer choices to the user about what direction to take.

Usage notes:

- Users will always be able to select "Other" to provide custom text input
- Use multiSelect: true to allow multiple answers to be selected for a question
```

## Input Schema:

```json
{
  "type": "object",
  "properties": {
    "questions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "question": {
            "type": "string",
            "description": "The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: \"Which library should we use for date formatting?\" If multiSelect is true, phrase it accordingly, e.g. \"Which features do you want to enable?\""
          },
          "header": {
            "type": "string",
            "description": "Very short label displayed as a chip/tag (max 12 chars). Examples: \"Auth method\", \"Library\", \"Approach\"."
          },
          "options": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "description": "The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."
                },
                "description": {
                  "type": "string",
                  "description": "Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."
                }
              },
              "required": ["label", "description"],
              "additionalProperties": false
            },
            "minItems": 2,
            "maxItems": 4,
            "description": "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."
          },
          "multiSelect": {
            "type": "boolean",
            "description": "Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive."
          }
        },
        "required": ["question", "header", "options", "multiSelect"],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 4,
      "description": "Questions to ask the user (1-4 questions)"
    },
    "answers": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "User answers collected by the permission component"
    }
  },
  "required": ["questions"],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

## Input Zod

```ts
const OptionSchema = z
  .object({
    label: z
      .string()
      .describe(
        "The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."
      ),
    description: z
      .string()
      .describe(
        "Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."
      ),
  })
  .strict(); // additionalProperties: false

const QuestionItemSchema = z
  .object({
    question: z
      .string()
      .describe(
        'The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'
      ),
    header: z
      .string()
      .describe(
        'Very short label displayed as a chip/tag (max 12 chars). Examples: "Auth method", "Library", "Approach".'
      ),
    options: z
      .array(OptionSchema)
      .min(2)
      .max(4)
      .describe(
        "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."
      ),
    multiSelect: z
      .boolean()
      .describe(
        "Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive."
      ),
  })
  .strict(); // additionalProperties: false, required 已由 z.object 保证

export const RootSchema = z
  .object({
    questions: z
      .array(QuestionItemSchema)
      .min(1)
      .max(4)
      .describe("Questions to ask the user (1-4 questions)"),
    answers: z
      .record(z.string())
      .describe(
        "User answers collected by the permission component"
      )
      .optional(), // 非必填
  })
  .strict();
```




```

User has answered your questions: "你想创建什么类型的Web项目？"="React应用", "你希望项目包含哪些功能特性？"="用户认证, 数据库集成, API接口, 部署配置", "你偏好的CSS解决方案是什么？"="Tailwind CSS". You can now continue with the user's answers in mind.

```

```
User has answered your questions: . You can now continue with the user's answers in mind.
```