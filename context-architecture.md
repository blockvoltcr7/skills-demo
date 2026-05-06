# Context Architecture for AI Agents

## Core Message

Modern AI models are already strong, and they will continue to improve. GPT 5.4, GPT 5.5, GPT 5.6, Sonnet 4.5, Sonnet 4.6, Opus 4.6, Opus 4.7, and future models will keep getting better over time.

But model quality is only one part of the outcome.

The model still needs the right context, the right tools, and the right execution harness. Without that, even a capable model can produce weak, unfocused, or inconsistent results.

## Models Are Good, But Context Still Matters

The model can reason, write, code, and operate tools, but the quality of its work depends heavily on what it knows at the moment of the task.

As humans, we steer the model toward the outcome we want by providing the right context. That context can include project conventions, workflow instructions, reusable prompts, available tools, skills, and the specific user request.

When the context is clear, the model is more likely to produce useful work. When the context is missing, noisy, or too broad, the model can drift into what the industry often calls "slop": output that looks plausible but does not match the real goal.

## The Harness Matters

It is not the model alone that decides which tools and skills exist.

The harness around the model is what exposes those capabilities. The harness tells the model what tools are available, what skills exist, how they should be discovered, and when they can be loaded.

For example, an editor or agent runtime may provide:

- File reading and editing
- Search tools such as grep or glob
- Shell commands
- Web search or URL fetching
- MCP tools for systems like Jira, GitHub, databases, or internal services
- Skills that encode reusable workflows and project-specific procedures

The model uses these capabilities, but the harness is what makes them available in the first place.

This is why agent systems are improving not only because the models are improving, but also because the surrounding harness is getting better at giving the model the right context at the right time.

## What Gets Loaded Into an AI Session

Different kinds of context enter the session in different ways.

| Context Source | Purpose |
| --- | --- |
| `copilot-instructions.md` | Global instructions loaded at the start of a new session. These define broad behavior and expectations. |
| `AGENT.md` | Project or folder-level instructions. A workspace can have multiple `AGENT.md` files in different folders, giving the model local context for that part of the codebase. |
| Reusable prompts | Workflow prompts for repeatable tasks, such as research, implementation planning, code review, or documentation generation. |
| Tools and MCP servers | Runtime capabilities such as reading files, searching code, running shell commands, fetching URLs, or calling external systems like Jira. |
| User prompt | The specific request from the user. This is the immediate task the model is trying to satisfy. |
| `SKILL.md` | A reusable procedural capability that can be discovered and loaded progressively when relevant. |

## Skills and Progressive Disclosure

The value of skills is that the full skill file does not need to be loaded into the context window on every turn.

A skill can contain detailed instructions, examples, scripts, templates, and workflow rules. That full content might be hundreds or thousands of lines long. Loading all of it into every session would waste context and make the model's working memory noisier.

Instead, skills use progressive disclosure.

At first, the model only receives lightweight metadata:

- Skill name
- Skill description

That metadata is enough for the model to know that the skill exists. If the user's request matches the skill's purpose, the model can then load the full `SKILL.md` only when it is needed.

This preserves the context window while still giving the model access to deep procedural knowledge.

## Why This Is Better Than Large Prompt Files

Without skills, teams often rely on large prompt files that must be loaded manually or included repeatedly. A single workflow prompt might be 1,500 lines and cost thousands of tokens each time it is loaded.

That approach does not scale well.

Skills allow the model to discover relevant procedures based on the user's intent. The model can then load only the specific skill required for the task instead of carrying every possible instruction in context at all times.

This makes agent behavior more modular, reusable, and efficient.

## Practical Example

Imagine a team has a Spring Boot REST service and wants code written in a specific style.

The team may have conventions for:

- Controllers
- Service layers
- Repository or persistence layers
- Error handling
- DTOs and request validation
- Testing patterns
- Logging and observability

Instead of pasting those conventions into the chat every time, the team can create dedicated skills for those workflows.

For example:

- `spring-controller-patterns`
- `spring-service-layer-patterns`
- `spring-persistence-patterns`
- `spring-testing-patterns`

When a user asks the model to modify a controller, the model can infer that the controller skill is relevant, load the skill, and apply the team's standards automatically.

When the user asks for a persistence-layer change, the model can load the persistence skill instead.

The user does not need to manually find and paste the right prompt. The model can select the relevant skill based on the task.

## Example: Document Generation Skill

Another example is document generation.

Suppose a user says:

> After you finish the research, structure the results in a professionally organized Word document.

If the harness has exposed a document-generation skill, the model can already know from the skill name and description that there is a capability for creating professional documents.

The model can then load that skill and follow its instructions to produce the requested document format.

The full document-generation workflow does not need to be loaded in every session. It only needs to be loaded when the user's request makes it relevant.

## The Bigger Point

Better models matter, but better context architecture matters too.

High-quality AI work comes from the combination of:

- A capable model
- A strong harness
- Clear user intent
- Relevant project context
- Appropriate tools
- Reusable skills
- Progressive loading of detailed instructions

The model is not operating in isolation. It is part of a system.

The more intentionally that system provides context, tools, and skills, the more reliable and useful the model becomes.

