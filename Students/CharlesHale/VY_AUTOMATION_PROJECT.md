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

Industry Collaboration

I have been collaborating with QL2, a data scraping and competitive intelligence company, to implement a similar vision-based automation system within their infrastructure. This ongoing partnership has involved:

- Consulting on the integration of LLM-powered vision systems for their CAPTCHA bypass requirements
- Adapting the Hammerspoon automation framework for their specific use cases
- Sharing insights on context window management and automatic recovery systems
- Providing guidance on scaling the approach across multiple machines

This collaboration validates the commercial viability of the automation approach and has provided valuable feedback for improving the core system architecture.

Development Progress

Completed Optimizations

RAM optimization was achieved at 4.5GB per VM after testing various configurations. The setup script now automatically configures VM memory allocation while maintaining Vy compatibility. The system runs 3 VMs plus the host on a single Mac Mini without issues.

VM navigation and monitoring is fully functional. The script switches between VMs from the physical computer, monitors Vy status and token count across all VMs, automatically kills and restarts VMs on token exhaustion, and provides debugging output when needed.

Dynamic resource management was implemented with automatic RAM adjustment based on load, Chrome restart triggers on high RAM usage, and system health monitoring that logs to a local file.

The testing phase was completed with over a week of continuous uptime. The system was deployed to 2 Mac Minis and performance metrics confirmed stability.

Future Considerations

If I return to this project, potential improvements include a general Mac Mini setup script for faster deployment, central monitoring from the main computer, and a remote control system for all Mac Minis. Residential VPN rotation could be added for additional anonymity. Automated update propagation across all systems and downtime detection with alerts would also be useful.

Final Status

The project is complete and stable. All major bugs have been fixed and the system runs continuously in the background without intervention. VM rotation, token detection, memory management, and automatic recovery all function as intended. The system has been stress tested and is now in passive operation mode. I am moving on to other projects but will keep this running.

Technical Implementation

The system uses Hammerspoon for automation scripting in Lua, UTM for virtualization, Vy for LLM and vision-based computer interaction, and will deploy to a Mac Mini farm.

---
Last Updated: January 2026
