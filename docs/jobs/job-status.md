---
sidebar_position: 7
---

# Job status

## Listing jobs

The list command by default lists any active jobs, i.e. jobs which are pending or running:

```
$ prominence list
ID     STATUS    IMAGE                       CMD     ARGS
3101   pending   alahiff/testpi
3103   pending   alahiff/cherab-jet:latest   python  batch_make_sensitivity_matrix.py 0 59
3104   pending   ikester/blender:latest      blender -b classroom/classroom.blend -o frame_### -f 
```

It’s also possible to request a list of jobs using a constraint on the labels associated with each job. For example, if you submitted a group of jobs with a label `name=run5`, the following would list all such jobs:

```
$ prominence list --all --constraint name=run5
```

Here the `--all` option means that both active (i.e. pending or running) and completed jobs will be listed.§

## Describing jobs

To get more information about an individual job, use the describe command, for example:

```
$ prominence describe 345
{
  "id": , 
  "status": "pending", 
  "resources": {
    "nodes": 1, 
    "disk": 10, 
    "cpus": 1, 
    "memory": 1
  }, 
  "tasks": [
    {
      "image": "eoscprominence/testpi", 
      "runtime": "singularity"
    }
  ], 
  "events": {
    "createTime": "2019-10-04 18:07:40"
  }
}
```

To show information about completed jobs, both the list and describe commands accept a `--completed` option. For example, to list the last 2 completed jobs:

```
$ prominence list --completed --last 2
ID     STATUS      IMAGE                       CMD          ARGS
2980   completed   alahiff/tensorflow:1.11.0   python       models-1.11/official/mnist/mnist.py --export_dir mnist_saved_model
2982   completed   alahiff/tensorflow:1.11.0   python       models-1.11/official/mnist/mnist.py --export_dir mnist_saved_model
```

Note that jobs which are completed or have been removed for some reason may be visible briefly without using the `--completed` option.

## Completed jobs

The JSON descriptions of completed jobs contain additional information. This may include:

* **status**: current job status.
* **statusReason**: for jobs in a terminal state other than the completed state this may give a reason for the current status.
* **createTime**: date & time when the job was created by the user.
* **startTime**: date & time when the job started running.
* **endTime**: date & time when the job ended.
* **site**: the site where the job was executed.
* **maxMemoryUsageKB**: the maximum total memory usage of the job, summed over all processes (note this is not available for jobs running on remote HTC or HPC resources)

The following information is also provided for each task:

* **retries**: the number of retries attempted.
* **exitCode**: the exit code returned by the user’s job. This would usually would be 0 for success.
* **imagePullTime**: time taken to pull the container image. If a cached image from a previous task was used this will be -1.
* **wallTimeUsage**: wall time used by the task.
* **cpuTimeUsage**: CPU time usage by the task. For a task using multiple CPUs this will be larger than the wall time.
* **maxResidentSetSizeKB**: maximum resident size (in KB) of the largest process
