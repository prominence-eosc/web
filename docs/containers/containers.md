---
sidebar_position: 1
---

# Containers

In PROMINENCE all jobs are run in unprivileged containers using user-specified images. It is possible to use either the Singularity or udocker container runtimes, but of course standard Docker images can be used.

## Why containers?
Every job in PROMINENCE needs to have a container image specified. Running jobs in containers ensure that the application will be able to run successfully without depending on any software on the host. This is important because PROMINENCE makes use of a variety of different cloud resources, managed by different people from different organizations, potentially around the world.
