---
title: Policies
sidebar_position: 11
---

# Policies

The `policies` section of a job’s JSON description enables users to have more control of how jobs are managed and influence where they will be executed. The available options are:

* **maximumRetries**: maximum number of times a failing job will be retried.
* **maximumTimeInQueue**: maximum time in minutes the job will stay in the `pending` state. The default is `0`, which means that the job will stay in the `pending` state until it starts running or there is a failure. The value `-1` means that the job will stay in the `pending` state until it starts running. When set to a non-zero value, the job will be automatically set to the `failed` state if it has not started running within the time limit.
* **leaveInQueue**: when set to `true` (default is `false`) completed, failed and deleted jobs will remain in the queue until the user specifies that they can be removed.
* **placement**: allows users to specify requirements and preferences to influence where jobs will run.

For example:

```
   {
     "tasks": [
       {
         "image": "centos:7", 
         "runtime": "singularity",
         "cmd": date
       }
     ], 
     "name": "test", 
     "resources": {
       "nodes": 1, 
       "disk": 10, 
       "cpus": 1, 
       "memory": 1
     },
     "policies": {
       "maximumRetries": 4,
       "maximumTimeInQueue": 600,
       "leaveInQueue": true
     }
   }
```

## Placement policies

Job placement policies enable users to influence where jobs will be executed. `Sites` refer to specific clouds and `regions` refer to groups of clouds.
Placement policies consist of `requirements` (which must be satisfied) and `preferences` (used for ranking).

To force a job to run at a particular site (`OpenStack-Alpha` in this case):

```
"policies": {
  "placement": {
    "requirements": {
      "sites": [
        "OpenStack-Alpha"
      ]
    }
  }
}
```

To force a job to run at any site in a particular region:

```
"policies": {
  "placement": {
    "requirements": {
      "regions": [
        "Alpha"
      ]
    }
  }
}
```
