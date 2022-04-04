
# MicroFrontEnds
This is an example of MicroFrontEnds created with ModuleFederation.


## Install dependencies
To install dependencies, you just need to run `make install` command and let the Makefile do its work

If you dont have make command in your machine because you work with windows, follow this quick guide to install it (no admin permission requried)

## Make

Make is an automation tool we use to execute code blocks with shortened commands.

Linux and Mac already have make installed.

To install it on Windows first we need to install **scoop**

### Install Scoop

Make sure [PowerShell 5](https://aka.ms/wmf5download "https://aka.ms/wmf5download") (or later, include [PowerShell Core](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-6 "https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-6")) and [.NET Framework 4.5](https://www.microsoft.com/net/download "https://www.microsoft.com/net/download") (or later) are installed. Then run:

`1Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')`

### Install Make

To install make we need to open a CMD and run

`1$ scoop install make`

Then **reboot your machine**

## Run the project
With this command you can run all projects in the same machine.

If you want to run any individual project, enter to the project folder and run `npm start`

To run all projects together, run: `make start`