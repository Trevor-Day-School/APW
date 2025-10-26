Vy Automation Project - Charles Hale

Project Summary

I am using Hammerspoon scripts to control an application called Vy, which leverages LLMs and image recognition to interact with my computer. It requires a display to understand what is happening on screen. I am using Vy to continuously fill out surveys online as a proof of concept that it can perform as well as the average person while remaining undetectable. The macro detects when the chat has reached its context window and automatically restarts it. I also have UTM installed with 2 instances running in the background as a computer farm. I am working on modifying the scripts so I can run and monitor them remotely. The plan is to have a bunch of Mac Minis run this script.

What Has Been Completed

The core automation system is functional and includes several key components:

- VM Pool Manager v3.0 that manages 6 virtual machines and runs 2 concurrently with automatic token rotation
- HTTP communication system on port 8888 for VM heartbeat monitoring and deadman's switch functionality
- Automatic detection of context window exhaustion with VM rotation
- Daily reset at 8PM that automatically resets all VM tokens
- Auto-login configuration so VMs boot directly to desktop (password: NotArobot1244!)
- Memory management system that performs auto-cleanup when RAM drops below 500MB

Several scripts have been developed for different purposes:

- Physical computer script that controls Vy without the deadman's switch
- VM Hammerspoon script that includes deadman's switch functionality
- VM manager for UTM control, login automation, and deployment
- Over 40 diagnostic and testing tools
- 20+ backup iterations preserved for rollback capability

The current configuration supports a 16GB Mac setup with 2 VMs at 5GB each plus the host at 6GB. The entire project has been organized into a structured directory with 124 files categorized by function. Working checkpoints have been saved for known stable states.

Planned Development

Immediate Priorities

RAM optimization to achieve 4.5GB per VM is the first goal. This involves researching and creating a setup script to lower VM requirements while verifying compatibility with Vy operation. The target is to test 3 VMs plus the host on a single Mac Mini.

VM navigation and monitoring improvements are needed. The script must be able to switch between VMs from the physical computer, monitor Vy status and token count across all VMs, automatically kill and restart VMs on token exhaustion, and provide enhanced debugging capabilities.

Dynamic resource management will include automatic RAM adjustment based on load, Chrome restart on high RAM usage, and comprehensive system health monitoring.

A testing phase will validate the system with 4 days at 100% uptime, deployment to 2 Mac Minis, and collection of performance metrics.

Future Enhancements

Long-term improvements include a general Mac Mini setup script, central monitoring from the main computer, and a remote control system for all Mac Minis. Residential VPN rotation is being considered. The system should support automated update propagation across all systems and include downtime detection with alerts.

Current Status

The working automation system is operational with functional VM rotation and token detection. RAM optimization is currently in progress, and the testing phase is pending.

Technical Implementation

The system uses Hammerspoon for automation scripting in Lua, UTM for virtualization, Vy for LLM and vision-based computer interaction, and will deploy to a Mac Mini farm.

---
Last Updated: October 2025
