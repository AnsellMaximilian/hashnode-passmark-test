import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("sidebar collapse mechanism", async ({ page }) => {
  test.setTimeout(60_000); // increase timeout for AI execution

  await runSteps({
    page,
    userFlow: "Collapse the sidebar",
    steps: [
      { description: "Navigate to https://hashnode.com/" },
      { description: "Collapse the sidebar" },
    ],
    assertions: [
      { assertion: "Sidebar is collapsed, with just the icons visible" },
    ],
    test,
    expect,
  });
});

test("sidebar can expand", async ({ page }) => {
  test.setTimeout(100_000); // increase timeout for AI execution

  await runSteps({
    page,
    userFlow: "Expand the sidebar",

    steps: [
      { description: "Navigate to https://hashnode.com/" },
      { description: "Collapse the sidebar" },
      { description: "Expand the sidebar" },
    ],

    assertions: [
      { assertion: "Sidebar is fully expanded with labels visible" },
    ],

    test,
    expect,
  });
});
