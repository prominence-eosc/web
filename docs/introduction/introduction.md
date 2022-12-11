---
sidebar_position: 1
---

# Introduction

PROMINENCE is a platform which allows users to exploit idle cloud resources for running containerised workloads. From a user's perspective PROMINENCE appears like a standard batch system but jobs can be run from anywhere in the world on clouds anywhere in the world.

The following example shows how quick and easy it is to install and setup the command line interface then run a basic job:

```bash
 # Install the CLI
pip install prominence-cli

# Set your access token
export PROMINENCE_TOKEN=eyJ0eXAiOiJKV1QiLCJhb...

# Submit a job
prominence create busybox "echo Hello World"
Job created with id 3120

# Get the standand output
prominence stdout 3120
Hello World
```
While this example is very straightforward, it demonstrates how easy it is run a container and retrieve it's standard output. The
container is of course not running locally but could be running on a cloud on the other side the world.
