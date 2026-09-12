# Route Assignments

Assignments completed during the six-month Route diploma.

## Repository layout

Each assignment lives in its own top-level directory:

```text
Assignment_01/
Assignment_02/
Assignment_03/
...
```

## Branch flow

```text
assignment_NN  ->  development  ->  main  ->  tag assignment-NN
```

- `main` contains completed, reviewed assignments only.
- `development` is the integration branch for the next assignment.
- `assignment_NN` is the working branch for assignment number `NN`.
- Changes reach `development` and `main` through pull requests.
- Direct pushes to `main` are blocked locally by a hook and must also be
  blocked by a GitHub ruleset.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the exact commands, commit format,
and pull-request workflow.

## One-time local setup

Run this from the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup-git.ps1
```

This enables the repository's commit-message validation, direct-push guard,
and commit-message template.
