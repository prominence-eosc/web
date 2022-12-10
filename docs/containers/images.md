---
sidebar_position: 2
---

# Images

The image can be specified in the following ways:

* `<user>/<repo>:<tag>` (Docker Hub)
* `<hostname>/<project-id>/<image>:<tag>` (Google Container Registry)
* `shub://<user>/<repo>:<tag>` (Singularity Hub)
* URL of a tarball created by `docker save`
* URL of a Singularity image
* path of a tarball created by `docker save` when remote storage is attached to jobs
* path of a Singularity image when remote storage is attached to jobs

Container registries other than Docker Hub may also work. It is possible to provide credentials to use for authenticating with a registry.

Under some conditions a container runtime will be selected automatically. This will only happen if there is only one runtime which will work for the specified image. For other cases, e.g. a Docker Hub image, Singularity is used as the default but optionally udocker can be forced by the user.

Images which will result in Singularity being selected:

* Singularity Hub image (begins with `shub://`)
* URL for a Singularity image (filename ends in `.sif` or `.simg`)

Images which will result in udocker being selected:

* URL for a Docker tarball (filename ends in `.tar`)

Generally it is recommended to use Singularity. If it is essential to be able to write into the container's filesystem (e.g `/opt` or `/var`) then udocker should be used.


## Registry authentication

If a registry requires authentication then `imagePullCredential` must be specified in the task, which defines a `username` and `token`. For example:

```
{
  "resources": {
    "memory": 1,
    "cpus": 1,
    "nodes": 1,
    "disk": 10
  },
  "name": "gitlab-image",
  "tasks": [
    {
      "image": "registry.gitlab.com/mynamespace/myproject/image:rc1",
      "runtime": "singularity",
      "imagePullCredential": {
        "username": "username",
        "token": "VzIxo3sZ2yC6V5YeSBxR"
      }
    }
  ]
}
```

The same method can be used for other private registries and Docker Hub. It is preferable that a token with read-only privileges is used rather than a password if at all possible.
