Final Progress Update - Charles Hale

Project Overview

This project uses an LLM combined with a vision model (VLM) to interact with a computer by actually seeing the screen. Unlike traditional automation tools that rely on element selectors or pixel coordinates, this approach processes the display visually and decides what to do based on context. The system runs through Hammerspoon scripts on macOS with UTM handling virtualization.

Why This Approach is Different

Traditional bots are easy to detect because they behave predictably. They click at exact coordinates, type at inhuman speeds, and follow rigid scripts. Detection systems like CAPTCHAs exist specifically to filter out this robotic behavior.

This system is different for a few reasons:

- It actually sees the screen like a human would, so it can handle CAPTCHAs and visual challenges
- Behavior is non-deterministic and varies naturally since it's driven by an LLM
- Everything runs client-side on my hardware, so there's no detectable API calls or unusual network patterns
- It adapts to UI changes without needing script updates

The goal was never to spin up thousands of low-quality bots. Instead, I focused on running maybe 3-5 high-quality instances that can handle complex tasks that would normally require a human. These aren't spamming systems - they're capable of nuanced interaction with any application.

Hardware and Economics

The setup runs on a Mac Mini ($500). Each VM instance requires about 4GB of RAM, and I can comfortably run 3 instances simultaneously on my hardware.

Revenue breakdown:
- Each instance generates roughly $2-$4 per day
- With 3 instances running: $6-$12 per day
- System runs 24/7 in the background with no intervention needed
- Monthly passive income: approximately $180-$360

The system paid for itself within the first few months.

Use Cases Tested

I've deployed this system for several different applications:

Survey Completion - The primary use case. The system fills out online surveys continuously, handling verification challenges and rotating between VMs when tokens are exhausted.

Social Media Management - Tested as Instagram, TikTok, and Reddit bots. Capable of liking, following, commenting, and general account management. The natural behavior makes these accounts harder to flag.

Gaming - Taught the system to play Clash of Clans. It manages its own account, makes strategic decisions, and plays autonomously. This was more of a proof of concept but demonstrated the flexibility of the approach.

What I Learned

This project taught me several valuable skills:

- Hammerspoon and Lua scripting for macOS automation
- UTM virtualization and VM management
- Memory optimization and resource allocation
- Building systems that run autonomously with self-recovery
- HTTP communication between host and VM instances

Final Thoughts

I consider this project a success. The original goal was to create a passive income stream that runs without constant attention, and that's exactly what it does now. The system is stable, the bugs are fixed, and it operates continuously in the background while I focus on other things.

A small number of high-quality bots don't cause any damage, and I can use them for almost anything. They're undetectable, so they're much more reliable, although they're much less profitable. I'm not doing it for the profit.

---
Charles Hale
January 2026
