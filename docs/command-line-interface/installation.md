# Installation

The PROMINENCE command line interface (CLI) can be installed from PyPI.

## As a normal user

### Using a virtual environment

The preferred way to install the PROMINENCE CLI is in a virtual environment. For example, first setup an environment:
```
python3 -m venv prominence
source prominence/bin/activate
```
then install the CLI:
```
pip install prominence-cli
```

### Without using a virtual environment

An alternative to using a virtual environment is to install in your home directory, i.e.
```
pip install --user prominence-cli
```

## On the host with sudo or root privileges

The PROMINENCE CLI can be installed on a host by typing the following:
```
sudo pip install prominence-cli
```

## Checking what version is installed

The version of the PROMINENCE CLI installed can be checked by running:
```
prominence --version
```

