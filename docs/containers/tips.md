---
sidebar_position: 3
---

# Tips for creating containers

Some important tips for creating containers to be used with PROMINENCE:

* Do not put any software or required files in `/root`, since containers are run as an unprivileged user.
* Do not put any software or required files in `/home` or `/tmp`, as these directories in the container image will be replaced when the container is executed.
* Do not specify `USER` in your Dockerfile when creating the container image.
* The environment variable `HOME` will be set to a scratch directory (``/home/user``) accessible inside the container when the container is executed. For the case of multi-node MPI jobs this scratch directory is accessible across all nodes running the job.
* The environment variables `TMP` and `TEMP` are set to `/tmp`. This directory is always local to the host, including for multi-node MPI jobs.
* Do not expect to be able to write inside the container's filesystem. Write any files into the default current working directory, or into the directories specified by the environment variables `HOME`, `TMP` and `TEMP`.
* The application should be able to be run from within any directory and access any required input or output files using relative paths.
