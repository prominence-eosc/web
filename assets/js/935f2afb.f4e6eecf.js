"use strict";(self.webpackChunkprominence=self.webpackChunkprominence||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"About","href":"/docs/introduction/about","docId":"introduction/about"},{"type":"link","label":"Main features","href":"/docs/introduction/features","docId":"introduction/features"},{"type":"link","label":"Workflows, jobs and tasks","href":"/docs/introduction/workflows-jobs-tasks","docId":"introduction/workflows-jobs-tasks"},{"type":"link","label":"Job lifecycle","href":"/docs/introduction/job-lifecycle","docId":"introduction/job-lifecycle"}],"href":"/docs/introduction/"},{"type":"category","label":"Containers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Images","href":"/docs/containers/images","docId":"containers/images"},{"type":"link","label":"Tips for creating containers","href":"/docs/containers/tips","docId":"containers/tips"},{"type":"link","label":"MPI jobs","href":"/docs/containers/mpi-jobs","docId":"containers/mpi-jobs"}],"href":"/docs/containers/"},{"type":"category","label":"Command line interface","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/command-line-interface/installation","docId":"command-line-interface/installation"}]},{"type":"category","label":"Jobs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Running jobs","href":"/docs/jobs/running-jobs","docId":"jobs/running-jobs"},{"type":"link","label":"Standard output & error","href":"/docs/jobs/stdout-stderr","docId":"jobs/stdout-stderr"},{"type":"link","label":"Job status","href":"/docs/jobs/job-status","docId":"jobs/job-status"},{"type":"link","label":"Deleting a job","href":"/docs/jobs/deleting-jobs","docId":"jobs/deleting-jobs"},{"type":"link","label":"Labels","href":"/docs/jobs/labels","docId":"jobs/labels"},{"type":"link","label":"JSON","href":"/docs/jobs/generating-json","docId":"jobs/generating-json"},{"type":"link","label":"Policies","href":"/docs/jobs/policies","docId":"jobs/policies"},{"type":"link","label":"Inputs","href":"/docs/jobs/inputs","docId":"jobs/inputs"}]},{"type":"link","label":"Workflows","href":"/docs/workflows/","docId":"workflows/workflows"}]},"docs":{"command-line-interface/installation":{"id":"command-line-interface/installation","title":"Installation","description":"The PROMINENCE command line interface (CLI) can be installed from PyPI.","sidebar":"tutorialSidebar"},"containers/containers":{"id":"containers/containers","title":"Containers","description":"In PROMINENCE all jobs are run in unprivileged containers using user-specified images. It is possible to use either the Singularity or udocker container runtimes, but of course standard Docker images can be used.","sidebar":"tutorialSidebar"},"containers/images":{"id":"containers/images","title":"Images","description":"The image can be specified in the following ways:","sidebar":"tutorialSidebar"},"containers/mpi-jobs":{"id":"containers/mpi-jobs","title":"MPI jobs","description":"Some are some additional requirements on the container images for MPI jobs:","sidebar":"tutorialSidebar"},"containers/tips":{"id":"containers/tips","title":"Tips for creating containers","description":"Some important tips for creating containers to be used with PROMINENCE:","sidebar":"tutorialSidebar"},"introduction/about":{"id":"introduction/about","title":"About","description":"PROMINENCE was originally developed in the Fusion Science Demonstrator in the European Open Science Cloud for Research pilot project (EOSCpilot),","sidebar":"tutorialSidebar"},"introduction/features":{"id":"introduction/features","title":"Main features","description":"Flexible submission","sidebar":"tutorialSidebar"},"introduction/introduction":{"id":"introduction/introduction","title":"Introduction","description":"PROMINENCE is a platform which allows users to exploit idle cloud resources for running containerised workloads. From a user\'s perspective PROMINENCE appears like a standard batch system but jobs can be run from anywhere in the world on clouds anywhere in the world.","sidebar":"tutorialSidebar"},"introduction/job-lifecycle":{"id":"introduction/job-lifecycle","title":"Job lifecycle","description":"The state diagram below shows the possible job states.","sidebar":"tutorialSidebar"},"introduction/workflows-jobs-tasks":{"id":"introduction/workflows-jobs-tasks","title":"Workflows, jobs and tasks","description":"A job in PROMINENCE consists of the following:","sidebar":"tutorialSidebar"},"jobs/deleting-jobs":{"id":"jobs/deleting-jobs","title":"Deleting a job","description":"Jobs cannot be modified after they are created but they can be deleted. The delete command allows you to kill a single job:","sidebar":"tutorialSidebar"},"jobs/generating-json":{"id":"jobs/generating-json","title":"JSON","description":"Jobs in PROMINENCE are defined using JSON. It is possible to create JSON job descriptions and submit them directory to the REST API,","sidebar":"tutorialSidebar"},"jobs/inputs":{"id":"jobs/inputs","title":"Inputs","description":"Most jobs of course require input files of some kind, and it is of course possible to provide input files to jobs in PROMINENCE.","sidebar":"tutorialSidebar"},"jobs/job-status":{"id":"jobs/job-status","title":"Job status","description":"Listing jobs","sidebar":"tutorialSidebar"},"jobs/labels":{"id":"jobs/labels","title":"Labels","description":"Arbitrary metadata in the form of key-value pairs can be associated with jobs.","sidebar":"tutorialSidebar"},"jobs/policies":{"id":"jobs/policies","title":"Policies","description":"The policies section of a job\u2019s JSON description enables users to have more control of how jobs are managed and influence where they will be executed. The available options are:","sidebar":"tutorialSidebar"},"jobs/running-jobs":{"id":"jobs/running-jobs","title":"Running jobs","description":"Single node jobs","sidebar":"tutorialSidebar"},"jobs/stdout-stderr":{"id":"jobs/stdout-stderr","title":"Standard output & error","description":"The standard output and error from a job can be seen using the stdout and stderr commands. For example, to get the standard output for the job with id 299:","sidebar":"tutorialSidebar"},"workflows/workflows":{"id":"workflows/workflows","title":"Workflows","description":"Types of workflows","sidebar":"tutorialSidebar"}}}')}}]);