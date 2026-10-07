<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep appearance state in the shared AppearanceProvider and apply theme and text size through global CSS tokens so every page scales consistently while preserving the original font families.
- Store device-only appearance preferences in browser storage after hydration; these presentation settings do not require accounts or Cloud.
- Select 10 questions from a shuffled difficulty pool per game, keeping the question bank independent of session length so additions increase replay variety.
