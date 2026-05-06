# Community Signal: Reddit and Other Public Reports

## Scope
Community evidence was collected for prompt injection, tool poisoning, and malware concerns in skills/plugin ecosystems. Items are split by confidence.

## Confirmed or high-confidence incidents

1. Amazon Q VS Code extension supply-chain compromise (July 2025).
   - AWS bulletin: https://aws.amazon.com/security/security-bulletins/AWS-2025-015/
   - GitHub advisory: https://github.com/aws/aws-toolkit-vscode/security/advisories/GHSA-7g7f-ff96-5gcw

2. Snyk ToxicSkills research (Feb 2026), large skills-marketplace scan.
   - https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/

3. Prompt-injection reporting via GitHub-origin context (Apr 2026, secondary report).
   - https://cybernews.com/security/ai-agents-github-prompt-injection-pattern/

## Anecdotal community reports (use as signal, not proof)

1. Reddit r/programming thread on PromptPwnd / GitHub Actions prompt injection chain:
   - https://www.reddit.com/r/programming/comments/1pe3cew/prompt_injection_within_github_actions_google/

2. Reddit r/ChatGPT thread on indirect injection in internal doc workflows:
   - https://www.reddit.com/r/ChatGPT/comments/1r5snvl/indirect_prompt_injection_in_ai_agents_is/

3. Reddit r/AI_Agents thread on blocked injection in fetched web content:
   - https://www.reddit.com/r/AI_Agents/comments/1sxnfwh/watched_my_ai_agent_block_a_prompt_injection_that/

4. Reddit r/SecOpsDaily discussion amplifying ToxicSkills findings:
   - https://www.reddit.com/r/SecOpsDaily/comments/1qz3w78/toxicskills_snyk_finds_malware_and_prompt/

## Interpretation

- Reddit and forum posts are useful early warning channels.
- Operational decisions should anchor on vendor advisories, CVEs, standards, and reproducible technical reports.
- Current community signal is directionally consistent with official guidance: trust boundaries around skills/tools are weak by default.
