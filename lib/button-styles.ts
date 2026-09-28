// The two call-to-action styles, after the LangGraph reference: equal height,
// mono labels, no background fill. The primary action is set in the light
// signature blue with a blue outline; the secondary one in the text color
// with a neutral outline.
const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-md border px-6 font-mono text-sm transition-colors";

export const buttonPrimary = `${base} border-primary/60 text-primary-soft hover:border-primary hover:bg-primary/10`;

export const buttonSecondary = `${base} border-border text-foreground hover:border-primary/60 hover:text-primary`;
