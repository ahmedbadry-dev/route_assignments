$ErrorActionPreference = "Stop"

$repositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
git -C $repositoryRoot config --local core.hooksPath .githooks
git -C $repositoryRoot config --local commit.template .gitmessage

Write-Host "Git hooks and commit template are enabled for this repository."
