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

A **workflow** consists of:

* Name
* Labels
* One or more job definitions
* Any dependencies between jobs
* Factories to generate multiple jobs based on job templates
* Policies (e.g. how many times should failing jobs should be retried)
* Notifications (e.g. to specify email notification upon workflow completion)

## Example

An example workflow, including how it is made up of jobs and tasks, is shown below:

![Tasks and jobs within a workflow](prominence-tasks-jobs-workflows.png)

