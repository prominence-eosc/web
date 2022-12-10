---
sidebar_position: 9
---

# Labels

Arbitrary metadata in the form of key-value pairs can be associated with jobs.

## Defining labels

Labels in the form of key-value pairs (separated by “=”) can be set using the `--label` option when creating a job. This option can be used multiple times to set multiple labels. For example:

```
$ prominence create --label experiment=MAST-U --label shot=12 test/container
```

Each key and value must be a string of less than 64 characters. Keys can only contain alphanumeric characters (``[a-z0-9A-Z]``) while values can also contain dashes (`-`), underscores (`_`), dots (`.`) and forward slashes (`/`).

## Finding jobs with specific labels

It is possible to specify a constraint when using the list command. For example, to list all active jobs which have a label `experiment` set to `MAST-U`:

```
$ prominence list --constraint experiment=MAST-U
```

To list all jobs, i.e. both active and completed jobs, with a specific label, add the `--all` option, e.g.

```
$ prominence list --constraint experiment=MAST-U --all
```

