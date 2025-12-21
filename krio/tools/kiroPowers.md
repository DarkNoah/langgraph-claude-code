
```md
Tool to manage and use Kiro Powers.

**About Powers:** Powers package documentation, workflow guides (steering files), and optionally MCP servers. When a power includes MCP servers, their tools are accessed through this interface rather than exposed directly, loading tool definitions and more detailed instructions via "activate". This keeps your context focused while providing full access to capabilities on-demand. This approach provides:

- **Minimal context**: See 5 actions for all powers instead of dozens of tools per power
- **Structured discovery**: Use "activate" to discover what capabilities a power provides on-demand - returns comprehensive documentation (POWER.md content), all available tools grouped by MCP server with their descriptions and input schemas, and available steering files for guided workflows
- **Full functionality**: "activate" provides all information needed to effectively use a power - documentation for understanding, steering file lists for workflows, and complete tool schemas with parameters for MCP servers contained in the power, enabling execution through the "use" action
- **Guided workflows**: POWER.md files and steering guides provide context for optimal usage

**PROACTIVE POWER ACTIVATION:** When you see words or topics in the user's message that match the keywords for any installed power, you should **strongly consider activating that power immediately**. The keywords indicate the power's domain of expertise. For example, if a power has keywords like "docs", "documentation", "api" and the user asks about documentation, you should proactively activate that power to access its capabilities.

**Currently Installed Powers:**

• **stripe**
  Build payment integrations with Stripe - accept payments, manage subscriptions, handle billing, and process refunds
  Keywords: stripe, payments, checkout, subscriptions, billing, invoices, refunds, payment-intents — **If you see any of these words in the user's message, strongly consider activating this power immediately!**
  MCP Servers: stripe

• **saas-builder**
  Build production ready multi-tenant SaaS applications with serverless architecture, integrated billing, and enterprise grade security
  Keywords: saas, multi-tenant, serverless, aws, lambda, dynamodb, stripe, billing, react, typescript — **If you see any of these words in the user's message, strongly consider activating this power immediately!**
  MCP Servers: fetch, stripe, aws-knowledge-mcp-server, awslabs.dynamodb-mcp-server, awslabs.aws-serverless-mcp, playwright


**IMPORTANT: Call action="activate" with a powerName before using any power to understand its tools and parameters.**


# ACTIONS:

1. **LIST** ("list") - See all installed powers
   **Parameters:** None

   **Returns:** Formatted list with:
   - **name**: The power's identifier (used in other actions)
   - **description**: What the power does
   - **keywords**: Search terms describing the power's capabilities
   - **MCP servers**: Backend servers that provide the power's tools

   **When to use:**
   - To discover what powers are currently installed
   - To find power names for use in other actions
   - To see what capabilities are available

   **CRITICAL - KEYWORD MATCHING:** When you see ANY words in the user's message that match a power's keywords, you should **immediately and proactively activate that power**. Keywords are specifically chosen to indicate the power's domain. Don't wait for the user to explicitly ask - if they mention topics related to the keywords, activate the power right away. Examples:
   - User mentions "docs" or "documentation" → If a power has "docs" keywords, activate it immediately
   - User asks about "weather" → If a power has "weather", "forecast" keywords, activate it
   - User talks about "database" or "sql" → If a power has those keywords, activate it

   The keyword match is your strongest signal to activate a power proactively!

   **Example:** action="list"

2. **ACTIVATE** ("activate") - **IMPORTANT: ALWAYS call this FIRST when you need to use a power!**
   **Parameters:**
   - powerName (required): Name of the power to activate

   **Returns:** Comprehensive documentation including:
   - overview: Complete POWER.md content with all documentation
   - toolsByServer: All MCP tools grouped by server with descriptions and input schemas
   - steeringFiles: List of available detailed workflow guides
   - powerMdFound: Whether POWER.md documentation was found
   - Metadata: powerName, displayName, keywords, description

   Activating a power before using it helps you understand the correct tool names, required parameters, and optimal workflows needed to successfully use the power.

   **Example:** action="activate", powerName="weather-power"

3. **USE** ("use") - **IMPORTANT: Call action="activate" FIRST before using this action!**
   **Parameters:**
   - powerName (required): The power to use
   - serverName (required): The MCP server within the power - get from toolsByServer keys in activate response
   - toolName (required): Specific tool within the server - get from toolsByServer[serverName] array in activate response
   - arguments (required): Tool parameters matching the inputSchema from activate response

   **Returns:** Tool execution result from MCP server

   **Workflow:**
   1. Call action="activate" with powerName to get the power's toolsByServer map
   2. Review toolsByServer to identify which server has your desired tool
   3. Extract the serverName (key) and toolName from toolsByServer
   4. Check the tool's inputSchema to understand required parameters
   5. Call action="use" with powerName, serverName, toolName, and arguments

   **CRITICAL: You MUST provide serverName from the activate response. Powers can have multiple MCP servers, and tools may exist on different servers.**

   **Example:** action="use", powerName="weather-power", serverName="weather-api", toolName="get_forecast", arguments={"location":"Seattle","units":"imperial"}

4. **READ_STEERING** ("readSteering") - Get detailed workflow guides
   **Parameters:**
   - powerName (required): Name of the power
   - steeringFile (required): Steering file name (including .md extension) - must be one from steeringFiles array in activate response

   **Returns:** Markdown content with detailed instructions for specific workflows, advanced patterns, or specialized use cases.

   **When to use:** After calling action="activate" to get the steeringFiles array, call this action to read a specific steering file for detailed workflow guidance.

   **Example:** action="readSteering", powerName="weather-power", steeringFile="getting-started.md"

5. **CONFIGURE** ("configure") - Open powers management panel
   **Parameters:** None

   Opens the Powers side panel where users can browse, install, and manage powers through a visual interface. Returns a success confirmation message.

   **When to use:**
   - When the user wants to install new powers
   - When the user wants to browse or discover available powers
   - When the user asks to see available powers in a UI
   - When the user wants to manage their installed powers

   **IMPORTANT:** If the user asks to install a power or browse available powers, call this action immediately to open the management panel.

   **Example:** action="configure"

# WORKFLOW:
1. See installed powers above
2. Call action="activate" with powerName to get toolsByServer map
3. Extract serverName (keys) and toolName from toolsByServer
4. Call action="use" with powerName, serverName, toolName, and arguments
5. Optional: Call action="readSteering" for step-by-step guides

# COMPLETE EXAMPLE: Using Weather Power

Step 1: List installed powers
  → action="list"
  → See: weather-power is installed

Step 2: Activate weather power
  → action="activate", powerName="weather-power"
  → Response shows: toolsByServer = { "weather-api": [
      { name: "get_forecast", inputSchema: { location: string, units: string } },
      { name: "get_current", inputSchema: { location: string } }
    ]}
  → Now you know: serverName="weather-api", available tools, and their schemas

Step 3: Use a specific tool (now you know the server name, tool name, and parameters!)
  → action="use", powerName="weather-power", serverName="weather-api", toolName="get_forecast", arguments={"location":"Seattle","units":"imperial"}
  → Returns: Weather forecast data

# CRITICAL RULES:
- **NEVER call action="use" without calling action="activate" first** - you will fail if you guess
- Tool names and input schemas come from the activate response (don't guess!)
- Review toolsByServer and inputSchema from activate response before using
- Power names are case-sensitive
- Guessing server names, tool names, or parameters will fail
```








```js
z.object({
  action: z.enum(["list","activate","use","readSteering","configure"])
  .describe("The action to perform: \"list\" to discover installed powers, \"activate\" to get documentation, \"use\" to execute power tools, \"readSteering\" for guides, \"configure\" to open config file"),
  powerName: z.string().optional().describe("Name of the power (required for activate, use, readSteering actions; not used for list or configure)"),
  serverName: z.string().optional().describe("Name of the MCP server within the power (REQUIRED for use action - get from toolsByServer in activate response)"),
  toolName: z.string().optional().describe("Name of the tool to execute within the power (required for use action)"),
  arguments: z.object().optional().default(null).describe("Arguments object for the tool being called (use action only, get schema from activate action)"),
  steeringFile: z.array(z.string()).describe("Name of the steering file to read (REQUIRED for readSteering action - get from steeringFiles array in activate response, including .md extension)")
});
```