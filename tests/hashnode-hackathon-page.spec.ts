import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

const FEATURED_HACKATHON_DETAILS = {
  title: "Breaking Apps Hackathon",
  description:
    "A 4-week open hackathon to test your apps, test the internet, and share Passmark — the open-source AI library for regression testing. $4,000+ in prizes. Free AI credits included.",
};

test("featured hackathon is visible", async ({ page }) => {
  test.setTimeout(100_000); // increase timeout for AI execution

  await runSteps({
    page,
    userFlow: "View the featured hackathon on the homepage",

    steps: [{ description: "Navigate to https://hashnode.com/" }],

    assertions: [
      { assertion: "The featured hackathon is visible on the page" },
      {
        assertion: `The featured hackathon has the correct title: ${FEATURED_HACKATHON_DETAILS.title}`,
      },
      {
        assertion: `The featured hackathon has the correct description: ${FEATURED_HACKATHON_DETAILS.description}`,
      },
    ],

    test,
    expect,
  });
});

test("featured hackathon shows correct countdown", async ({ page }) => {
  test.setTimeout(300_000); // increase timeout for AI execution

  await runSteps({
    page,
    userFlow: "View the featured hackathon countdown",

    steps: [
      { description: "Navigate to https://hashnode.com/" },

      { description: "Click the featured hackathon" },
      {
        description:
          "Look at the submission requirement and take not of the deadline date",
      },
    ],

    assertions: [
      {
        assertion: 'A "Live now" countdown badge is visible for the hackathon',
      },
      {
        assertion:
          "Deadline date exists and is visible in the submission section",
      },
      {
        assertion: `The coundown badge shows the correct time remaining based on the current date (${new Date()})}) and the hackathon deadline within ~1 hour accuracy`,
      },
    ],

    test,
    expect,
  });
});
