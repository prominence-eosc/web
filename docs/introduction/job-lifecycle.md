---
sidebar_position: 5
---

# Job lifecycle

List of possible job states:

* **Pending**: the job is not yet running.
* **Running**: the job is runing.
* **Completed**: the job has completed, however note that the user application's exit status may or may not be 0.
* **Deleted**: the job has been deleted by the user.
* **Killed**: the job has been forcefully terminated, for example it had been running for too long.
* **Failed**: the job failed, for example the container image could not be pulled.
