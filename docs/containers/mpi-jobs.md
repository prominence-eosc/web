---
sidebar_position: 4
title: MPI jobs
---

Some are some additional requirements on the container images for MPI jobs:

* `mpirun` should be in available inside the container and in the `PATH`
* The `ssh` command should be installed inside the container

There is no reason to set an entrypoint as it will not be used. A command (and any required arguments) must be specified.

A simple minimal starting point for a Dockerfile for a CentOS 7 container image for OpenMPI is:

```
FROM centos:7
RUN yum -y install openssh-clients openmpi openmpi-devel

ENV PATH            /usr/lib64/openmpi/bin:${PATH}
ENV LD_LIBRARY_PATH /usr/lib64/openmpi/lib:${LD_LIBRARY_PATH}
```

and for MPICH:

```
FROM centos:7
RUN yum -y install openssh-clients mpich mpich-devel

ENV PATH            /usr/lib64/mpich/bin:${PATH}
ENV LD_LIBRARY_PATH /usr/lib64/mpich/lib:${LD_LIBRARY_PATH}
```

To create a container using IntelMPI an Intel compiler licence is required to build the application. This application can then be copied into a container image with the Intel Parallel Studio Runtime installed. For example, see [here](https://software.intel.com/en-us/articles/installing-intel-parallel-studio-xe-runtime-2019-using-yum-repository) for information on installing the free Intel runtime in a CentOS environment.

