---
sidebar_position: 1
---

# Introduction

PROMINENCE is a platform which allows users to exploit idle cloud resources for running containerised workloads. From a user's perspective PROMINENCE appears like a standard batch system but jobs can be run from anywhere in the world on clouds anywhere in the world.

Example submitting a job and retrieving the standard output using the command line interface:

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
