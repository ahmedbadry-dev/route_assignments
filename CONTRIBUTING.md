# Contribution Workflow

## Branches

Use these branch names:

```text
main
development
assignment_01
assignment_02
```

Start every new assignment from an up-to-date `development` branch:

```bash
git switch development
git pull origin development
git switch -c assignment_02
```

For the existing first assignment, use the `assignment_01` branch:

```bash
git switch assignment_01
```

## Commit messages

Use this format:

```text
type(scope): short imperative description
```

Allowed types:

- `feat`: add assignment functionality or a new section
- `fix`: correct broken behavior or markup
- `docs`: change documentation only
- `style`: formatting or visual styling without behavior changes
- `refactor`: reorganize code without changing behavior
- `test`: add or update tests
- `chore`: tooling, configuration, or repository maintenance

Use the assignment as the scope. Examples:

```text
feat(assignment-01): add registration form markup
style(assignment-01): match spacing and typography
fix(assignment-01): associate labels with form controls
docs(repo): document assignment workflow
chore(repo): add local git hooks
```

Keep each commit focused on one logical change. Do not use vague messages such
as `update`, `changes`, `done`, or `final`.

## Completing an assignment

1. Commit and push the assignment branch:

   ```bash
   git push -u origin assignment_01
   ```

2. Open a pull request from `assignment_01` into `development` and complete the
   checklist.
3. Merge the pull request after the assignment is ready.
4. Open a second pull request from `development` into `main`.
5. Merge it and create a tag for the completed assignment:

   ```bash
   git switch main
   git pull origin main
   git tag -a assignment-01 -m "Complete assignment 01"
   git push origin assignment-01
   ```

6. Delete the assignment branch after both pull requests are merged.

Never merge `main` back into an assignment branch. If the working branch needs
updates, merge or rebase the latest `development` into it.
