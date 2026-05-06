const pptxgen = require("/Users/samisabir-idrissi/.nvm/versions/node/v20.19.4/lib/node_modules/pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "AI Agent Skills: Powering Procedural Memory";

// Palette
const NAVY    = "0F172A";
const DARK    = "0D1117";
const CARD    = "1E293B";
const INDIGO  = "4F46E5";
const PURPLE  = "7C3AED";
const CYAN    = "06B6D4";
const TEAL    = "0D9488";
const GRAY    = "94A3B8";
const WHITE   = "FFFFFF";
const FOOTER  = "1A2535";

const makeShadow = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.25 });

// ─────────────────────────────────────────────────────
// SLIDE 1  –  Anatomy: Skill Structure & Core
// ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  // Header bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: INDIGO }, line: { color: INDIGO } });
  s.addText("THE ANATOMY OF AI AGENT SKILLS", {
    x: 0.35, y: 0, w: 9.3, h: 0.72, fontSize: 19, color: WHITE, bold: true,
    fontFace: "Arial Black", charSpacing: 2, margin: 0, valign: "middle",
  });

  s.addText("Skill Structure & Core Components", {
    x: 0.35, y: 0.76, w: 9.3, h: 0.38, fontSize: 13, color: CYAN,
    fontFace: "Calibri", margin: 0, valign: "middle",
  });

  // ── Left card: skill.md breakdown ──
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.25, w: 4.3, h: 3.85,
    fill: { color: CARD }, line: { color: INDIGO, width: 1.5 }, shadow: makeShadow(),
  });
  // Card header
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 1.25, w: 4.3, h: 0.48, fill: { color: INDIGO }, line: { color: INDIGO } });
  s.addText("skill.md — The Core", {
    x: 0.42, y: 1.25, w: 4.1, h: 0.48, fontSize: 12, color: WHITE, bold: true,
    fontFace: "Arial", margin: 0, valign: "middle",
  });

  s.addText("Every skill requires this markdown file", {
    x: 0.42, y: 1.78, w: 4.0, h: 0.3, fontSize: 10, color: GRAY,
    fontFace: "Calibri", margin: 0, italic: true,
  });

  // YAML front matter
  s.addText("Mandatory YAML Front Matter", {
    x: 0.42, y: 2.14, w: 4.0, h: 0.3, fontSize: 11, color: CYAN, bold: true, fontFace: "Calibri", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.42, y: 2.48, w: 4.0, h: 0.72, fill: { color: "111827" }, line: { color: "374151", width: 1 },
  });
  s.addText([
    { text: "name:",        options: { bold: true, color: "F472B6" } },
    { text: "  Identity for the skill",  options: { color: GRAY } },
    { text: "\n" },
    { text: "description:", options: { bold: true, color: "F472B6" } },
    { text: "  Trigger condition", options: { color: GRAY } },
  ], { x: 0.52, y: 2.52, w: 3.8, h: 0.64, fontSize: 10, fontFace: "Consolas", margin: 0 });

  // Instruction Body
  s.addText("Instruction Body", {
    x: 0.42, y: 3.28, w: 4.0, h: 0.3, fontSize: 11, color: CYAN, bold: true, fontFace: "Calibri", margin: 0,
  });
  s.addText("Detailed rules and behavior the\nagent follows when activated.", {
    x: 0.42, y: 3.6, w: 4.0, h: 0.5, fontSize: 10, color: GRAY, fontFace: "Calibri", margin: 0,
  });

  s.addText("Skill Folder  — contains skill.md + resources", {
    x: 0.42, y: 4.18, w: 4.0, h: 0.3, fontSize: 10, color: WHITE, bold: true, fontFace: "Calibri", margin: 0,
  });
  s.addText("Fully portable: version-controlled tiles that move between platforms.", {
    x: 0.42, y: 4.5, w: 4.0, h: 0.4, fontSize: 9.5, color: GRAY, fontFace: "Calibri", margin: 0, italic: true,
  });

  // ── Right: folder cards ──
  const folders = [
    { label: "scripts/",    desc: "Executable code",         color: "10B981" },
    { label: "references/", desc: "Documentation",           color: "F59E0B" },
    { label: "assets/",     desc: "Templates & data files",  color: "8B5CF6" },
  ];
  folders.forEach((f, i) => {
    const y = 1.25 + i * 1.3;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.0, y, w: 4.7, h: 1.12,
      fill: { color: CARD }, line: { color: f.color, width: 1.5 }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.0, y, w: 0.07, h: 1.12, fill: { color: f.color }, line: { color: f.color } });
    s.addText(f.label, {
      x: 5.2, y: y + 0.15, w: 4.3, h: 0.38, fontSize: 14, color: WHITE, bold: true, fontFace: "Consolas", margin: 0,
    });
    s.addText(f.desc, {
      x: 5.2, y: y + 0.6, w: 4.3, h: 0.35, fontSize: 11, color: GRAY, fontFace: "Calibri", margin: 0,
    });
  });

  // Footer
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.35, w: 10, h: 0.275, fill: { color: FOOTER }, line: { color: FOOTER } });
  s.addText("1 / 4  •  AI Agent Skills Architecture", {
    x: 0.3, y: 5.35, w: 9.4, h: 0.275, fontSize: 9, color: GRAY, fontFace: "Calibri", margin: 0, valign: "middle",
  });
}

// ─────────────────────────────────────────────────────
// SLIDE 2  –  Progressive Disclosure + Comparisons
// ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: PURPLE }, line: { color: PURPLE } });
  s.addText("PROGRESSIVE DISCLOSURE  &  SKILL COMPARISONS", {
    x: 0.35, y: 0, w: 9.3, h: 0.72, fontSize: 16, color: WHITE, bold: true,
    fontFace: "Arial Black", charSpacing: 1, margin: 0, valign: "middle",
  });

  s.addText("Progressive Disclosure — 3-Tier Loading", {
    x: 0.35, y: 0.8, w: 9.3, h: 0.35, fontSize: 13, color: CYAN, bold: true, fontFace: "Calibri", margin: 0,
  });

  const tiers = [
    { num: "1", title: "Metadata Startup",      desc: "Only name & description loaded.\nPreserves the token budget.",                        color: "10B981" },
    { num: "2", title: "Instruction Matching",  desc: "Request matches → full skill body\nloaded into LLM context window.",                   color: "F59E0B" },
    { num: "3", title: "Resource Loading",      desc: "Scripts, assets, and docs loaded\nonly at the exact point of need.",                   color: "EF4444" },
  ];
  tiers.forEach((t, i) => {
    const x = 0.3 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.22, w: 2.8, h: 1.68,
      fill: { color: CARD }, line: { color: t.color, width: 1.5 }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.OVAL, { x: x + 0.14, y: 1.32, w: 0.44, h: 0.44, fill: { color: t.color }, line: { color: t.color } });
    s.addText(t.num, {
      x: x + 0.14, y: 1.32, w: 0.44, h: 0.44, fontSize: 13, color: WHITE, bold: true,
      fontFace: "Arial", margin: 0, align: "center", valign: "middle",
    });
    s.addText("Tier " + t.num + ": " + t.title, {
      x: x + 0.65, y: 1.32, w: 2.05, h: 0.44, fontSize: 10, color: WHITE, bold: true,
      fontFace: "Calibri", margin: 0, valign: "middle",
    });
    s.addText(t.desc, {
      x: x + 0.15, y: 1.82, w: 2.55, h: 0.9, fontSize: 10, color: GRAY, fontFace: "Calibri", margin: 0,
    });
  });

  s.addText("Skills vs Other AI Knowledge Forms", {
    x: 0.35, y: 3.05, w: 9.3, h: 0.35, fontSize: 13, color: CYAN, bold: true, fontFace: "Calibri", margin: 0,
  });

  const comps = [
    { title: "Skills  vs  MCP",         left: "MCP provides tool access (what the LLM can reach)", right: "Skills add judgment — when & how to use tools", color: "6366F1" },
    { title: "Skills  vs  RAG",          left: "RAG handles factual/semantic memory",               right: "Skills handle procedural knowledge (how to do tasks)", color: "10B981" },
    { title: "Skills  vs  Fine-Tuning", left: "Fine-tuning is permanent and expensive",             right: "Skills: portable, version-controlled, moveable tiles", color: "F59E0B" },
  ];
  comps.forEach((c, i) => {
    const x = 0.3 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 3.45, w: 2.8, h: 1.65,
      fill: { color: CARD }, line: { color: c.color, width: 1 }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.45, w: 2.8, h: 0.36, fill: { color: c.color }, line: { color: c.color } });
    s.addText(c.title, {
      x: x + 0.1, y: 3.45, w: 2.6, h: 0.36, fontSize: 10, color: WHITE, bold: true,
      fontFace: "Calibri", margin: 0, valign: "middle",
    });
    s.addText(c.left, {
      x: x + 0.1, y: 3.86, w: 2.6, h: 0.42, fontSize: 9.5, color: GRAY,
      fontFace: "Calibri", margin: 0, italic: true,
    });
    s.addShape(pres.shapes.LINE, { x: x + 0.1, y: 4.3, w: 2.6, h: 0, line: { color: c.color, width: 0.75, dashType: "dash" } });
    s.addText(c.right, {
      x: x + 0.1, y: 4.35, w: 2.6, h: 0.6, fontSize: 9.5, color: WHITE, fontFace: "Calibri", margin: 0,
    });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.35, w: 10, h: 0.275, fill: { color: FOOTER }, line: { color: FOOTER } });
  s.addText("2 / 4  •  AI Agent Skills Architecture", {
    x: 0.3, y: 5.35, w: 9.4, h: 0.275, fontSize: 9, color: GRAY, fontFace: "Calibri", margin: 0, valign: "middle",
  });
}

// ─────────────────────────────────────────────────────
// SLIDE 3  –  Models Are Good… But Context Matters
// ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: DARK };

  // Split background
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 4.7, h: 5.625, fill: { color: "111827" }, line: { color: "111827" } });
  s.addShape(pres.shapes.RECTANGLE, { x: 4.7, y: 0, w: 5.3, h: 5.625, fill: { color: NAVY }, line: { color: NAVY } });

  // Left: headline
  s.addText("Models are\ngood now...\nreally good.", {
    x: 0.45, y: 0.55, w: 3.9, h: 1.6, fontSize: 24, color: WHITE, bold: true, fontFace: "Georgia", margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.45, y: 2.28, w: 3.7, h: 0, line: { color: CYAN, width: 2.5 } });
  s.addText("But context\nmatters.", {
    x: 0.45, y: 2.38, w: 3.9, h: 1.0, fontSize: 24, color: CYAN, bold: true, fontFace: "Georgia", margin: 0,
  });
  s.addText("GPT 5.x, Sonnet 4.x, Opus 4.7…\nThe version race never ends.\n\nmodel + harness is great.\nBut context is the real differentiator.", {
    x: 0.45, y: 3.55, w: 3.9, h: 1.4, fontSize: 11, color: GRAY, fontFace: "Calibri", margin: 0,
  });

  // Right: key insight cards
  s.addText("The Key Insight", {
    x: 5.1, y: 0.45, w: 4.5, h: 0.38, fontSize: 14, color: CYAN, bold: true, fontFace: "Calibri", margin: 0,
  });

  const pts = [
    { text: "Model + harness = great results",              color: CYAN },
    { text: "Context is the real differentiator",           color: "10B981" },
    { text: "Slop vs quality is a context problem",         color: "F59E0B" },
  ];
  pts.forEach((p, i) => {
    const y = 0.98 + i * 1.0;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y, w: 4.55, h: 0.82,
      fill: { color: CARD }, line: { color: p.color, width: 1.5 }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y, w: 0.07, h: 0.82, fill: { color: p.color }, line: { color: p.color } });
    s.addText(p.text, {
      x: 5.28, y: y + 0.08, w: 4.2, h: 0.65, fontSize: 12, color: WHITE,
      fontFace: "Calibri", margin: 0, valign: "middle",
    });
  });

  // Red callout
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 4.05, w: 4.55, h: 1.05,
    fill: { color: "1C0A0A" }, line: { color: "EF4444", width: 1.5 }, shadow: makeShadow(),
  });
  s.addText("It's not the model that calls tools & skills —\nit's the harness that exposes them to the model.", {
    x: 5.22, y: 4.1, w: 4.3, h: 0.95, fontSize: 11, color: "FCA5A5",
    fontFace: "Calibri", margin: 0, valign: "middle", italic: true,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.35, w: 10, h: 0.275, fill: { color: FOOTER }, line: { color: FOOTER } });
  s.addText("3 / 4  •  AI Agent Skills Architecture", {
    x: 0.3, y: 5.35, w: 9.4, h: 0.275, fontSize: 9, color: GRAY, fontFace: "Calibri", margin: 0, valign: "middle",
  });
}

// ─────────────────────────────────────────────────────
// SLIDE 4  –  Context Architecture: What Gets Loaded
// ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: TEAL }, line: { color: TEAL } });
  s.addText("CONTEXT ARCHITECTURE  —  WHAT GETS LOADED INTO AN AI SESSION", {
    x: 0.35, y: 0, w: 9.3, h: 0.72, fontSize: 13, color: WHITE, bold: true,
    fontFace: "Arial Black", charSpacing: 1, margin: 0, valign: "middle",
  });

  const layers = [
    { label: "Copilot-instructions.md", desc: "Global instructions — loaded first on every new session start", color: "6366F1" },
    { label: "AGENT.md",               desc: "Folder-scoped context (multiple files allowed in different folders)", color: "8B5CF6" },
    { label: "Reusable prompt.md",     desc: "Workflow prompts you reuse across recurring tasks", color: "06B6D4" },
    { label: "Tools / MCP",            desc: "read, grep, glob, bash, fetch url, Jira, and other tool calls", color: "10B981" },
    { label: "User Prompt",            desc: "The user's actual request — the triggering input", color: "F59E0B" },
    { label: "SKILL.md",               desc: "Progressive Disclosure: only name + description loaded initially; full body on match", color: "EF4444" },
  ];

  layers.forEach((layer, i) => {
    const y = 0.84 + i * 0.72;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.3, y, w: 9.4, h: 0.6,
      fill: { color: CARD }, line: { color: layer.color, width: 1 }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y, w: 0.06, h: 0.6, fill: { color: layer.color }, line: { color: layer.color } });
    s.addShape(pres.shapes.OVAL, { x: 0.46, y: y + 0.08, w: 0.44, h: 0.44, fill: { color: layer.color }, line: { color: layer.color } });
    s.addText(String(i + 1), {
      x: 0.46, y: y + 0.08, w: 0.44, h: 0.44, fontSize: 11, color: WHITE, bold: true,
      fontFace: "Arial", margin: 0, align: "center", valign: "middle",
    });
    s.addText(layer.label, {
      x: 1.04, y: y + 0.05, w: 3.8, h: 0.28, fontSize: 11, color: WHITE, bold: true, fontFace: "Consolas", margin: 0,
    });
    s.addText(layer.desc, {
      x: 1.04, y: y + 0.32, w: 8.5, h: 0.24, fontSize: 10, color: GRAY, fontFace: "Calibri", margin: 0,
    });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.35, w: 10, h: 0.275, fill: { color: FOOTER }, line: { color: FOOTER } });
  s.addText("4 / 4  •  AI Agent Skills Architecture", {
    x: 0.3, y: 5.35, w: 9.4, h: 0.275, fontSize: 9, color: GRAY, fontFace: "Calibri", margin: 0, valign: "middle",
  });
}

pres.writeFile({ fileName: "ai-agent-skills.pptx" })
  .then(() => console.log("Done: ai-agent-skills.pptx"))
  .catch(console.error);
