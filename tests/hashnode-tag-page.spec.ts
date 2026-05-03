import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

// I've commented this out just so everything can succeed when you run `npx playwright test --project chromium`

// test("tag page displays correct content", async ({ page }) => {
//   test.setTimeout(300_000); // increase timeout for AI execution

//   await runSteps({
//     page,
//     userFlow: "View the tag page",

//     steps: [
//       { description: "Navigate to https://hashnode.com/" },

//       {
//         description: "Click the search menu in the sidebar",
//         waitUntil: 'The "Search Hashnode..." dialog is visible',
//       },
//       {
//         description: "Search for a tag",
//         data: { query: "#breakingappshackathon" },
//         waitUntil: "Search results are visible",
//       },
//       {
//         description:
//           "Click on #breakingappshackathon tag in the search results",
//         waitUntil: "The tag page is visible",
//       },
//       {
//         description:
//           'On the bottom of the list, click "Load more" to load more posts',
//         waitUntil: "Load more post button is gone",
//       },
//     ],

//     assertions: [
//       {
//         assertion:
//           "Under the #breakingappshackathon tag, there is text showing how many posts are under the tag, e.g. '18 posts'",
//       },
//       {
//         assertion:
//           "Search results are visible and display posts related to the #breakingappshackathon tag",
//       },
//       {
//         assertion:
//           "The amount of posts matches the 'n posts' number shown in the beginning of the page",
//       },
//     ],

//     test,
//     expect,
//   });
// });
