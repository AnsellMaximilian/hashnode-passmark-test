import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("search feature works", async ({ page }) => {
  test.setTimeout(300_000); // increase timeout for AI execution

  await runSteps({
    page,
    userFlow: "Use the search feature",

    steps: [
      { description: "Navigate to https://hashnode.com/" },

      {
        description: "Click the search menu in the sidebar",
        waitUntil: 'The "Search Hashnode..." dialog is visible',
      },
      {
        description:
          "Search for user but don't click on any of the search results",
        data: { query: "ansell max" },
        waitUntil: "Search results are visible",
      },
    ],

    assertions: [
      {
        assertion:
          "Search results are visible and display posts by Ansell Maximilian",
      },
      {
        assertion:
          "Search results are visible and display the expected user with username @ansellmax",
      },
    ],

    test,
    expect,
  });
});
