# AGENTS.md

Guidance for OpenCode working with code in this repository.

## General Principles

- Generate concise, focused solutions for new modules or code.
- Review existing files and architecture before making changes.
- Follow existing project patterns, naming conventions, and coding style.
- Avoid over-engineering and oversized files.
- Watch for obvious bugs, edge cases, and inconsistent behavior.
- Prefer simple, precise, maintainable code.
- Avoid unnecessary refactoring.
- Do not modify unrelated files.
- No emojis or special characters in code comments.
- Comments must be one sentence and explain why when necessary.
- Markdown files must use kebab-case naming.
- Use `/docs/activity-log.md` to record important development activity and decisions.
- Do not automatically commit activity logs or documentation changes.

## Planning

Before significant changes:

1. Inspect the relevant files.
2. Understand the existing architecture.
3. Identify dependencies and potential side effects.
4. Create a concise implementation plan.
5. Ask for confirmation before making major architectural changes, destructive changes, or changes affecting multiple unrelated areas.

For small, isolated fixes, proceed without unnecessary confirmation.

## Code Quality

- Choose appropriate data structures and algorithms.
- Prefer readable and maintainable solutions.
- Follow the existing project architecture.
- Avoid unnecessary abstractions.
- Avoid duplicated logic unless duplication improves usability or clarity.
- Do not expose data unnecessarily.
- Follow the principle of least privilege.
- Handle errors explicitly.
- Validate external and user-provided input.
- Consider performance when working with database queries or large datasets.

## Dependencies

- Do not add external libraries unless absolutely necessary.
- Check existing dependencies before introducing a new package.
- Use the project's dependency file to determine compatible versions.
- Prefer built-in or existing project functionality when practical.
- Do not replace an existing dependency without a clear reason.

## Documentation

- Keep documentation concise and useful.
- Use kebab-case for Markdown filenames.
- Update relevant documentation when behavior or architecture changes.
- Record significant implementation decisions in `/docs/activity-log.md`.
- Do not create unnecessary documentation.

## Version Control

- Keep changes focused and atomic.
- Review `git diff` before committing.
- Commit after significant completed changes when commits are requested or part of the workflow.
- Use clear and descriptive commit messages.
- Never automatically push to any remote branch.
- Never use destructive Git commands without explicit approval.
- Do not overwrite unrelated user changes.

## Security

Never include or expose:

- Passwords
- API keys
- Access tokens
- Authentication tokens
- Database credentials
- Connection strings
- Private keys
- Customer personal data

Customer personal data includes:

- Names
- Contact information
- Account numbers
- Transactions
- Other personally identifiable information

Only use sensitive or customer data when an explicit approved exemption exists.

Never commit secrets or sensitive data to the repository.

## AI Restrictions

- Do not invent APIs, functions, database schemas, or project behavior.
- Inspect the codebase before assuming how something works.
- Do not silently change requirements.
- Do not remove functionality simply because it appears unused.
- Do not perform destructive operations without explicit approval.
- If an important requirement is ambiguous, ask before making a potentially irreversible decision.

## Verification

After making changes:

1. Review the modified files.
2. Check for obvious bugs.
3. Run relevant tests, linting, type checking, or build commands when available.
4. Review the final diff.
5. Report what was changed and what was verified.

## Completion Format

When completing a task, provide:

### Summary

Brief description of the changes.

### Files Changed

List the important files modified.

### Verification

List tests, linting, type checks, builds, or other verification performed.

### Notes

Mention remaining issues, assumptions, or anything that could not be verified.

## Core Principle

Understand first.

Modify second.

Verify last.

Make the smallest correct change that solves the problem.
