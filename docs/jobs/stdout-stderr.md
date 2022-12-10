---
sidebar_position: 6
---

# Standard output & error

The standard output and error from a job can be seen using the stdout and stderr commands. For example, to get the standard output for the job with id 299:

```
$ prominence stdout 299
    _______
   < hello >
    -------
       \
        \
         \
                       ##        .
                 ## ## ##       ==
              ## ## ## ##      ===
          /""""""""""""""""___/ ===
     ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
          \______ o          __/
           \    \        __/
             \____\______/
```

:::note
The standard output and error can be seen while jobs are running as well as once they have completed, allowing users to check the status of long-running jobs.
:::
