# Tool Poisoning Risks in AI Skills

## What this is
Tool poisoning is manipulation of tool output or retrieval content so the model treats hostile text/data as trusted guidance and takes unsafe actions.

## Primary attack paths

1. MCP/tool output poisoning:
   attacker controls response payload and injects action-driving text.
2. Retrieval poisoning (RAG):
   malicious documents are indexed and ranked as relevant.
3. Multi-tool chain manipulation:
   low-trust input propagates to high-privilege tool execution.

## Examples

- A tool returns valid JSON plus hidden “next-step” instructions that override policy.
- Poisoned KB chunks cause an agent to call export/send tools with sensitive content.
- A manipulated CRM field causes downstream autonomous workflows to run incorrect actions.

## Trust boundary failures

- Unstructured tool outputs accepted without schema enforcement.
- No policy gate between model reasoning and side-effecting actions.
- Broad tokens and connector scope allow escalation after compromise.

## Mitigations

1. Treat all tool/retrieval output as untrusted.
2. Enforce strict structured outputs and reject unexpected fields.
3. Add policy checks before any write/send/delete/export action.
4. Use least privilege and short-lived credentials.
5. Add provenance scoring and ingestion controls for retrieval.
6. Keep human approval for high-risk operations.
7. Monitor and alert on anomalous tool-call graphs.

## Sources

- MCP spec tools: https://modelcontextprotocol.io/specification/2025-06-18/server/tools
- MCP security best practices: https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices
- OWASP MCP Tool Poisoning: https://owasp.org/www-community/attacks/MCP_Tool_Poisoning
- OWASP LLM01: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- Microsoft indirect injection defense: https://learn.microsoft.com/en-us/security/zero-trust/sfi/defend-indirect-prompt-injection
- MCP threat modeling paper: https://www.mdpi.com/2624-800X/6/3/84
- CPA-RAG poisoning paper: https://huggingface.co/papers/2505.19864
- AWS agentic AI security mapping: https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-security/owasp-top-ten.html
