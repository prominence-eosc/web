---
sidebar_position: 4
---

# Workflows, jobs and tasks

A **job** in PROMINENCE consists of the following:

* Name
* Labels (key-value pairs)
* Required resources (e.g. CPU cores, memory, disk, walltime)
* Input files
* Storage
* One or more task definitions (described below)
* Policies (e.g. how many times should failing tasks should be retried)

**Tasks** execute sequentially within a job, and consist of the following:

* Container image
* Container runtime
* Command to run and optionally any arguments
* Environment variables
* Current working directory

A **workflow** consists of one or more jobs and optionally any dependencies between them. Jobs within a workflow can be executed sequentially, in parallel or combinations of both.

