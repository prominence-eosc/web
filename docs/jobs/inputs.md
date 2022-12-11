---
sidebar_position: 12
---

# Inputs

Most jobs of course require input files of some kind, and it is of course possible to provide input files to jobs in PROMINENCE.

## Input files

Small input files can be uploaded from the host running the CLI and made available to jobs using the `--input` option. For example:

```
prominence create --input README centos:7 "cat README"
```

The files will be written in the job's default current directory, also referred to by the HOME, TMP or TEMP environment variables. `--input` can be specified
multiple times for multiple input files.

Note that large data files should not be provided to jobs this way, and there is a total size limit of 1 MB per file.

## Artifacts

Input files, including much large files if necessary, can be obtained from standard URLs using the `--artifact` option. This enables input
files to be downloaded from web servers or from object storage using presigned URLs.

```
prominence create --input https://raw.githubusercontent.com/lammps/lammps/develop/examples/ASPHERE/star/in.star centos:7 "cat in.star"
```
